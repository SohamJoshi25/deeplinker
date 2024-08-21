const {Packages,PackageName,urlConversionPairs}= require("./util.data.js");
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
 
//NOT HANDELLED missing CO-DOMAIN WWW. when db has https://youtube.com :: Handelled for https://youtu.be/dafsf... and https://www.youtube.com/asf..
const deepURL = (orignalurl) => {
    if(!orignalurl){
        throw new Error("URL Not Found | DeeplURL")
    }

    orignalurl = orignalurl.startsWith("https://")?orignalurl:"https://"+orignalurl;
    console.log(orignalurl)
    let url = convertShortUrl(orignalurl);

    const URLOBJ = new URL(url);
    const hostname = URLOBJ.hostname;

    const package = PackageName[hostname] || hostname;
    const path = url.substring(URLOBJ.origin.length); 
    const appname = hostname.split('.').length>2?hostname.split('.')[1]:hostname.split('.')[0];


    const result = {
        android:`intent://${hostname+path}#Intent;scheme=https;package=${package};end`,
        ios: `${appname}://${hostname+path}`,
        href:url
    }
    console.log(result);
    return result;
}
 
module.exports = deepURL;