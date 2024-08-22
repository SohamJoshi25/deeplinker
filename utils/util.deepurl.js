const {AppStoreLinks,PackageName,urlConversionPairs}= require("./util.data.js");
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
    const appname = hostname.split('.').length>2?hostname.split('.')[1]:hostname.split('.')[0];
    const appstore = AppStoreLinks[hostname] || AppStoreLinks[hostname.replace("www.","")];

    const result = {
        android:`intent://${hostname+path}#Intent;scheme=https;package=${package};end`,
        ios: `${appname}://${hostname+path}`,
        href:orignalurlprocressed,
        appstore:appstore
    }
    //console.log(result);
    return result;
}
 
module.exports = deepURL;