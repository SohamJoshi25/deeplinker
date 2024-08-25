const generateURL = require("../utils/util.generateurl.js")
const {preProcress} = require("../utils/util.preprocressing.js")
const {procressAndroid,procressIos} = require("../utils/util.procressing.js")
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

        const preprocressedURL = preProcress(link.URL);
        const userAgent = req.get('User-Agent');
        let browser = userAgent.includes('Instagram') ? "instagram" : userAgent.includes('Facebook') ? "facebook" : "other" ;

        if (/android/i.test(userAgent)) { 

            const data = procressAndroid(preprocressedURL);
            data.browser = browser;
            //console.log(data);
            res.render('view.result.android.ejs', { data } );
            
        } else if (/iPad|iPhone|iPod/.test(userAgent)) {

            const data = procressIos(preprocressedURL);
            data.browser = browser;
            //console.log(data);
            res.render('view.result.ios.ejs', { data } );

        } else {
            res.render('view.result.desktop.ejs', { data : {
                href:preprocressedURL
            }});

        }

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

const getAllUrl = async (req, res) => {
    try {
        const allURL = await linkModel.find({});
        if (!allURL || allURL.length === 0) {
            return res.status(404).json({ message: 'URL not found' });
        }

        res.json({
            message: "URLs fetched successfully",
            data: allURL
        });

    } catch (error) {
        console.error('Error fetching URLs:', error);
        res.status(500).json({ message: 'An error occurred while processing all URLs' });
    }
};

module.exports = { getURL, addURL, deleteURL, getAllUrl };
