const decodeURL = require("../utils/decodeurl.js");
const linkModel = require("../models/model.link.js");

const packages = {
    whatsapp: "com.whatsapp",
    youtube: "com.google.android.youtube",
    youtu: "com.google.android.youtube",
    twitter: "com.twitter.android",
    facebook: "com.facebook.katana",
    messenger: "com.facebook.orca",
    instagram: "com.instagram.android",
    linkedin: "com.linkedin.android",
    snapchat: "com.snapchat.android",
    tiktok: "com.zhiliaoapp.musically",
    pinterest: "com.pinterest",
    reddit: "com.reddit.frontpage",
    telegram: "org.telegram.messenger",
    signal: "org.thoughtcrime.securesms",
    discord: "com.discord",
    skype: "com.skype.raider",
    amazon: "in.amazon.mShop.android.shopping",
    ebay: "com.ebay.mobile",
    walmart: "com.walmart.android",
    flipkart: "com.flipkart.android", 
    myntra: "com.myntra.android", 
    jabon: "com.jabong.android",
    spotify: "com.spotify.music",
    netflix: "com.netflix.mediaclient",
    hulu: "com.hulu.plus",
    disneyplus: "com.disney.disneyplus",
    primevideo: "com.amazon.avod.thirdpartyclient",
    twitch: "tv.twitch.android.app",
    youtubeMusic: "com.google.android.apps.youtube.music",
    hotstar: "in.startv.hotstar", 
    jiotv: "com.jio.media.jiotv", 
    drive: "com.google.android.apps.docs",
    dropbox: "com.dropbox.android",
    onedrive: "com.microsoft.skydrive",
    evernote: "com.evernote",
    trello: "com.trello",
    notion: "notion.id",
    cred: "com.cred.app",
    zoom: "us.zoom.videomeetings",
    teams: "com.microsoft.teams",
    slack: "com.Slack",
    meet: "com.google.android.apps.tachyon",
    jiomeet: "com.jio.jiomeet",
    maps: "com.google.android.apps.maps",
    uber: "com.ubercab",
    lyft: "me.lyft.android",
    airbnb: "com.airbnb.android",
    tripadvisor: "com.tripadvisor.tripadvisor",
    booking: "com.booking",
    ola: "com.olacabs.customer",
    paypal: "com.paypal.android.p2pmobile",
    venmo: "com.venmo",
    cashApp: "com.squareup.cash",
    googlePay: "com.google.android.apps.walletnfcrel",
    paytm: "net.one97.paytm",
    phonepe: "com.phonepe.app",
    razorpay: "com.razorpay.android", 
    gmail: "com.google.android.gm",
    outlook: "com.microsoft.office.outlook",
    calendar: "com.google.android.calendar",
    lastpass: "com.lastpass.lpandroid",
    tinder: "com.tinder",
    bumble: "com.bumble.app",
    okcupid: "com.okcupid.okcupid",
    steam: "com.valvesoftware.android.steam.community",
    playstation: "com.scee.psxandroid",
    xbox: "com.microsoft.xboxone.smartglass",
    flipboard: "flipboard.app",
    nytimes: "com.nytimes.android",
    kindle: "com.amazon.kindle",
    myfitnesspal: "com.myfitnesspal.android",
    fitbit: "com.fitbit.FitbitMobile",
    strava: "com.strava",
    snapseed: "com.niksoftware.snapseed",
    lightroom: "com.adobe.lrmobile",
    canva: "com.canva.editor",
    jiosaavn: "com.jio.media.jiobeats",
    gaana: "com.gaana",
    haptik: "com.haptik.android", 
    urbanClap: "com.urbanclap.consumer", 
    groww: "com.groww.android",
    inshorts: "com.nischt.inshorts",
    lenskart: "com.lenskart.customer", 
    koo: "com.koo.app", 
    navi: "com.navi.app" 
}

const hosts = {
    "youtu.be" : "youtube.com" 
}

const getURL = async (req, res) => {
    try {
        const shortURL = req.params.url;
        if (!shortURL) {
            return res.status(400).send('URL query parameter is required');
        }

        const Link = await linkModel.findOne({ shortURL });
        if (!Link) {
            return res.status(404).send('URL Not Found');
        }

        const DyamicURL = Link.URL.startsWith("https://")?Link.URL:"https://"+Link.URL
        const URLObj = decodeURL(DyamicURL);
        const package = packages[URLObj.domain];
        if (!package) {
            return res.status(400).send('Link App NOt Supported');
        }
        const baseURL = URLObj.host + URLObj.path;
        const dynamicHost = hosts[URLObj.host]? hosts[URLObj.host] : URLObj.host;
        console.log(dynamicHost)


        if (!package) {
            deeplink = "https://" + baseURL;
        } else if (/android/i.test(req.get('User-Agent'))) {
            deeplink = `intent://${URLObj.subdomain}.${dynamicHost}${URLObj.path}#Intent;scheme=https;package=${package};end`;
        } else if (/iPad|iPhone|iPod/.test(req.get('User-Agent'))) {
            deeplink = `${URLObj.domain}://${baseURL}`;
        } else {
            deeplink = "https://" + baseURL;
        }
        res.render('view.result.ejs',{link:deeplink,url:""});


    } catch (error) {
        console.error('Error processing URL:', error);
        res.status(500).send('An error occurred while processing the redirect');
    }
};

const addURL = async (req, res) => {
    try {
        const newLink = new linkModel({
            shortURL: Math.random().toString(36).substring(2, 8), // You need to implement generateShortURL
            URL: req.body.url
        });

        await newLink.save();

        console.log(newLink.shortURL);
        const proxy = process.env.PROXY;
        res.render('view.result.ejs' ,{url:`${proxy}/api/${newLink.shortURL}`, link:""})

    }catch (error) {
        console.error('Error saving URL:', error);
        res.status(500).send('An error occurred');
    }
} 

const deleteURL = async (req, res) => {
    try {
        const URL = req.body.url;
        if (!URL) {
            return res.status(400).send('URL query parameter is required');
        }
     
        const shortURLarray = URL.split('/');
        const shortURL = shortURLarray[shortURLarray.length-1];

        if (!shortURL) {
            return res.status(400).send("No URL specified");
        }
        console.log(shortURL)

        const deletedLink = await linkModel.findOneAndDelete({ shortURL:shortURL });

        if (!deletedLink) {
            return res.status(404).send("URL not found here" );
        }

        res.render('view.result.ejs', { url: "URL has been deleted successfully",link:"" });

    } catch (error) {
        console.error('Error deleting URL:', error);
        res.status(500).send("An error occurred while deleting the URL");
    }
};

const homePage = (req, res) => {
    res.render('view.home.ejs')
}
  
const createPage = (req, res) => {
    res.render('view.create.ejs')
}

const deletePage = (req, res) => {
    res.render('view.delete.ejs')
}


module.exports = {getURL,addURL,deleteURL,homePage,createPage,deletePage};