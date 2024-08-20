const {Packages} = require("./util.data.js");
const { URL } = require('url');

const decodeURL = (Url) => {
    const urlObj = new URL(Url); // Utilize the URL constructor for accurate parsing
    
    const protocol = urlObj.protocol; // Extract protocol directly
    const host = urlObj.hostname; // Extract the full hostname
    const port = urlObj.port || (protocol === 'https:' ? '443' : '80'); // Handle default ports
    
    // Subdomain extraction logic
    const hostParts = host.split(".");
    const subdomain = hostParts.length === 3 ? hostParts[0] : "www";
    const domain = hostParts.length === 3 ? hostParts[1] : hostParts[0];
    const tld = hostParts.length === 3 ? hostParts[2] : hostParts[1];
    
    const path = urlObj.pathname; // Extract path using URL API
    
    return { protocol, host, subdomain, domain, tld, port, path };
};

const deepURL = (orignalurl) => {
    if(orignalurl=="")throw new Error("URL cannot be empty");
    let schemaURL = orignalurl.startsWith("https://")?orignalurl:"https://"+orignalurl;
    schemaURL = schemaURL.replace("youtu.be/","www.youtube.com/watch?v=");


      const DyamicURL = schemaURL.startsWith("https://")?schemaURL:"https://"+schemaURL
        const URLObj = decodeURL(DyamicURL);
        let isPackagePresent = true;
        const package = Packages[URLObj.domain];
        if (!package) {
            isPackagePresent = false;
        }

        const baseURL = URLObj.host + URLObj.path;
        const baseHOST = URLObj.domain +"."+ URLObj.tld;

    const result = {
        package:isPackagePresent,
        android:`intent://${URLObj.subdomain}.${baseHOST}${URLObj.path}#Intent;scheme=https;package=${package};end`,
        ios: `${URLObj.domain}://${baseURL}`,
        href:"https://" + baseURL
    }
    return result;
}
 
module.exports = deepURL;