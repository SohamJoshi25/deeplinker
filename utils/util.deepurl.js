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

    const package = PackageName[hostname] || PackageName[hostname.replace("www.","")] || "com.android.vending";
    const path = url.substring(URLOBJ.origin.length); 
    let appname = hostname.split('.').length>2?hostname.split('.')[1]:hostname.split('.')[0];
    appname=="app"?appname='reddit':appname;
    const appstore = AppStoreLinks[hostname] || AppStoreLinks[hostname.replace("www.","")];
    const fallback = "S.browser_fallback_url=https://play.google.com/store/apps/details?id="+package;
    let android_deep_link = package!='notaplicable'?`intent://${hostname+path}#Intent;scheme=https;package=${package};${fallback?fallback:""};end`:orignalurlprocressed
    android_deep_link = convertSpecialUrl(android_deep_link);

    const result = {
        android:android_deep_link,
        ios: `${appname}://${hostname+path}`.split("?")[0],
        href:orignalurlprocressed,
        appstore:appstore
    }
    console.log(result);
    return result; 
}
 
module.exports = deepURL;