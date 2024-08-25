
const urlConversionPairs = {
    "https://youtu.be/": "https://www.youtube.com/watch?v=",
    "https://youtube.com/":"https://www.youtube.com/",
    "https://amzn.to/": "https://www.amazon.com/",
    "https://fb.me/": "https://www.facebook.com/",
    "https://lnkd.in/": "https://www.linkedin.com/",
    "https://instagr.am/": "https://www.instagram.com/",
    "https://t.co/": "https://twitter.com/",
    "https://pin.it/": "https://www.pinterest.com/pin/",
    "https://wp.me/": "https://www.wordpress.com/",
}


const preProcress = (orignalurl) => {

    let urlwithhttps = orignalurl.startsWith("https://") ? orignalurl : "https://"+orignalurl;
    let longUrl = urlwithhttps;

    for (const shortUrl in urlConversionPairs) {
        if (longUrl.startsWith(shortUrl)) {
            longUrl = longUrl.replace(shortUrl, urlConversionPairs[shortUrl]);
            break;
        }
    }

    return longUrl

}

module.exports = {preProcress}
