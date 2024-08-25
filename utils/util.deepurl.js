const {AppStoreLinks,PackageName,urlConversionPairs,specialConversionPairs}= require("./util.data.js");
const { URL } = require('url');


function convertShortUrl(url) {
    for (const shortUrl in urlConversionPairs) {
        if (url.startsWith(`https://${shortUrl}`) || url.startsWith(`http://${shortUrl}`)) {
            const longUrl = url.replace(shortUrl, urlConversionPairs[shortUrl]);
            return longUrl;
        }
    }
    return url;
}

function convertSpecialUrl(url) {
    for (const shortUrl in specialConversionPairs) {
        if (url.startsWith(`${shortUrl}`)) {
            const longUrl = url.replace(shortUrl, specialConversionPairs[shortUrl]);
            return longUrl;
        }
    }
    return url;
}
 
const deepURL = (orignalurl) => {
    if(!orignalurl){
        throw new Error("URL Not Found | DeeplURL")
    }

    let tempurl = orignalurl.startsWith("https://")?orignalurl:"https://"+orignalurl;
    const orignalurlprocressed = tempurl.endsWith('/')?tempurl.substring(0,tempurl.length-1):tempurl;
    let url = convertShortUrl(orignalurlprocressed);
    //console.log(url)
    const URLOBJ = new URL(url);
    const hostname = URLOBJ.hostname;

    const package = PackageName[hostname] || PackageName[hostname.replace("www.","")] || "";
    const playstore = package?"https://play.google.com/store/apps/details?id="+package:"";
    const appstore = AppStoreLinks[hostname] || AppStoreLinks[hostname.replace("www.","")] || "";
    const path = url.substring(URLOBJ.origin.length); 

    let appname = hostname.split('.').length>2?hostname.split('.')[1]:hostname.split('.')[0];
    appname=="app"?appname='reddit':appname;
    let ios_deep_link = `${appname}://${path.startsWith('/')?path.substring(1):path}`;
   
    let android_deep_link = package?`intent://${hostname+path}#Intent;scheme=https;package=${package};end`:orignalurlprocressed
    android_deep_link = convertSpecialUrl(android_deep_link);
    let playstoreDeepLink = package?`intent://details?id=${package}#Intent;scheme=market;package=com.android.vending;end`:"";

    const result = {
        android:android_deep_link,
        ios:ios_deep_link,
        href:orignalurlprocressed,
        appstore:appstore,
        playstore: playstore,
        playstoreDeepLink:playstoreDeepLink
    }
    console.log(result);
    return result; 
}
 
module.exports = deepURL;