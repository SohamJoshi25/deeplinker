const deepURL = require("../utils/util.deepurl.js")
const generateURL = require("../utils/util.generateurl.js")
const linkModel = require("../models/model.link.js");

const getURL = async (req, res) => {
    try {
        const URL = req.params.url
        if (!URL) {
            return res.status(400).send('URL query parameter is required');
        }

        const link = await linkModel.findOne({shortURL:URL});
        if (!link) {
            return res.status(404).send('URL Not Found');
        }

        const deepURLObj = deepURL(link.URL);
        const userAgent = req.get('User-Agent');
        let deeplink = "";
        let appstorelink = "";
        let agent = "UNKNOWN";
        //console.log(deepURLObj)
        if (/android/i.test(userAgent)) { 
            deeplink = deepURLObj.android;
            agent = "ANDROID";
        } else if (/iPad|iPhone|iPod/.test(userAgent)) {
            deeplink = deepURLObj.ios;
            agent = "IOS";
            appstorelink = deepURLObj.appstore
        } else {
            deeplink = deepURLObj.href;
            agent = "DESKTOP";
        }

        res.render('view.result.ejs', { data : {
            deeplink: deeplink,
            agent: agent,
            fallback: appstorelink || deepURLObj.href
        }});

    } catch (error) {
        console.error('Error processing URL:', error);
        res.status(500).send('An error occurred while processing the redirect');
    }
};

const addURL = async (req, res) => {
    try {
        const URL = req.body.url;
        if (!URL) {
            return res.status(400).send('URL query parameter is required');
        }

        const shortURL = generateURL();
        const newLink = new linkModel({ shortURL, URL: URL });
        await newLink.save();

        const proxy = process.env.PROXY;
        
        res.render('view.result.ejs', { data : {
            link: proxy +'/api/'+ shortURL,
            message: "Here is your deep linked url."
        }});

    } catch (error) {
        console.error('Error saving URL:', error);
        res.status(500).send('An error occurred while saving url');
    }
}; 

const deleteURL = async (req, res) => {
    try {
        const URL = req.body.url;
        if (!URL) {
            return res.status(400).send('URL query parameter is required');
        }

        const shortURL = URL.split('/').pop();
        if (!shortURL) {
            return res.status(400).send('No URL specified');
        }

        const deletedLink = await linkModel.findOneAndDelete({ shortURL });
        if (!deletedLink) {
            return res.status(404).send('URL not found');
        }


        res.render('view.result.ejs', { data : {
            message: "Deep Link Deleted Successfully"
        }});

    } catch (error) {
        console.error('Error deleting URL:', error);
        res.status(500).send('An error occurred while deleting the URL');
    }
};

module.exports = { getURL, addURL, deleteURL };
