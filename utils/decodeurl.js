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
module.exports = decodeURL