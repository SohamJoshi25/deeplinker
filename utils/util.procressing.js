const {AppStoreLinks,PackageName,specialConversionPairs,timeZoneCountryMapping}= require("./util.data.js");
const iosdeeplink = require("./util.iosdeeplink.js")
const { URL } = require('url');

function convertSpecialLink(url) {
    for (const specialUrl in specialConversionPairs) {
        if (url.startsWith(`${specialUrl}`)) {
            return url.replace(specialUrl, specialConversionPairs[specialUrl]);
        }
    }
    return "";
}

const procressAndroid = (procressedURL) => {
    const URLOBJ = new URL(procressedURL);
    const hostname = URLOBJ.hostname;
    const path = procressedURL.substring(URLOBJ.origin.length); 
    const package = PackageName[hostname] || PackageName[hostname.replace("www.","")] || "";
    const playstore = package?"https://play.google.com/store/apps/details?id="+package:"";
    const playstoreDeepLink = package?`intent://details?id=${package}#Intent;scheme=market;package=com.android.vending;end`:"";
    const deepLink = package?`intent://${hostname+path}#Intent;scheme=https;package=${package};end`:"";
    const href = procressedURL;
    const specialLink = convertSpecialLink(procressedURL);
    return {playstore,playstoreDeepLink,deepLink,href,specialLink};
}

const procressIos = (procressedURL) => {
    const URLOBJ = new URL(procressedURL);
    const hostname = URLOBJ.hostname;
    const appstore = AppStoreLinks[hostname] || AppStoreLinks[hostname.replace("www.","")] || "";
    const deepLink = iosdeeplink(URLOBJ);
    const href = procressedURL;
    const specialLink = convertSpecialLink(procressedURL);
    return {appstore,deepLink,href,specialLink,timeZoneCountryMapping};
}

module.exports = {procressAndroid,procressIos}