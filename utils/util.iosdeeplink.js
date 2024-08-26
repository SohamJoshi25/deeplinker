function convertLinkedInUrlToDeepLink(urlObj) {

    const pathParts = urlObj.pathname.split('/').filter(Boolean);
    const searchParams = new URLSearchParams(urlObj.search);

    let deepLink = '';

    // Handle specific user profile
    if (pathParts[0] === 'in' && pathParts[1]) {
        const username = pathParts[1];
        deepLink = `linkedin://profile/${username}`;
    }

    // Handle specific company page
    else if (pathParts[0] === 'company' && pathParts[1]) {
        const companyId = pathParts[1];
        deepLink = `linkedin://company/${companyId}`;
    }

    // Handle specific post
    else if (pathParts[0] === 'feed/update' && pathParts[1]) {
        const postId = pathParts[1];
        deepLink = `linkedin://post/${postId}`;
    }

    // Handle specific job posting
    else if (pathParts[0] === 'jobs/view' && pathParts[1]) {
        const jobId = pathParts[1];
        deepLink = `linkedin://job/${jobId}`;
    }

    // Handle LinkedIn search query
    else if (pathParts[0] === 'search' && searchParams.has('keywords')) {
        const query = searchParams.get('keywords');
        deepLink = `linkedin://search?keywords=${encodeURIComponent(query)}`;
    }

    else if (pathParts[0] === 'pulse' && pathParts[1]) {
        const articleId = pathParts[1];
        deepLink = `linkedin://pulse/${articleId}`;
    }

    // Handle LinkedIn home page
    else if (pathParts.length === 0 && urlObj.hostname === 'www.linkedin.com') {
        deepLink = `linkedin://home`;
    }

    if(!deepLink){
        return `linkedin:/${urlObj.href.substring(urlObj.origin.length)}`;
    }
    return deepLink;
}

function convertInstagramUrlToDeepLink(urlObj) {
    const pathParts = urlObj.pathname.split('/').filter(Boolean);
    const searchParams = new URLSearchParams(urlObj.search);

    let deepLink = '';

    // Handle specific user profile
    if (pathParts[0] === 'p' && pathParts[1]) {
        const postId = pathParts[1];
        deepLink = `instagram://media?id=${postId}`;
    } else if (pathParts[0] === 'users' && pathParts[1]) {
        const userId = pathParts[1];
        deepLink = `instagram://user?id=${userId}`;
    } else if (pathParts[0] === 'users' && pathParts[2]) {
        const username = pathParts[2];
        deepLink = `instagram://user?username=${username}`;
    }else if (pathParts[0] && !pathParts[1]) {
        // Handle case where the URL is like https://www.instagram.com/creatosaurus/
        const username = pathParts[0];
        deepLink = `instagram://user?username=${username}`;
    }

    // Handle specific post
    else if (pathParts[0] === 'p' && pathParts[1]) {
        const postId = pathParts[1];
        deepLink = `instagram://media?id=${postId}`;
    }

    // Handle specific hashtag
    else if (pathParts[0] === 'explore' && pathParts[1] === 'tags' && pathParts[2]) {
        const hashtag = pathParts[2];
        deepLink = `instagram://tag?name=${hashtag}`;
    }

    // Handle search query
    else if (pathParts[0] === 'explore' && searchParams.has('q')) {
        const query = searchParams.get('q');
        deepLink = `instagram://search?query=${encodeURIComponent(query)}`;
    }

    // Handle Instagram Direct (messages)
    else if (pathParts[0] === 'direct') {
        deepLink = `instagram://direct`;
    }

    // Handle Instagram Explore page
    else if (pathParts.length === 0 && urlObj.hostname === 'www.instagram.com') {
        deepLink = `instagram://explore`;
    }

    // Handle Instagram Reels page
    else if (pathParts[0] === 'reels') {
        deepLink = `instagram://reels`;
    }

    // Handle Instagram Shopping page
    else if (pathParts[0] === 'shopping') {
        deepLink = `instagram://shopping`;
    }
    if(!deepLink){
        throw new Error("Some error occured")
    }
    return deepLink;
}

function convertFlipkartUrlToDeepLink(urlObj) {
    const pathParts = urlObj.pathname.split('/').filter(Boolean);
    const searchParams = new URLSearchParams(urlObj.search);

    let deepLink = '';

    // Handle specific product page
    if (pathParts[0] === 'product' && pathParts[1]) {
        const productId = pathParts[1];
        deepLink = `flipkart://product/${productId}`;
    }

    // Handle specific category page
    else if (pathParts[0] === 'category' && pathParts[1]) {
        const categoryId = pathParts[1];
        deepLink = `flipkart://category/${categoryId}`;
    }

    // Handle search queries
    else if (pathParts[0] === 'search' && searchParams.has('q')) {
        const query = searchParams.get('q');
        deepLink = `flipkart://search?q=${encodeURIComponent(query)}`;
    }

    // Handle cart page
    else if (pathParts[0] === 'cart') {
        deepLink = `flipkart://cart`;
    }

    // Handle orders page
    else if (pathParts[0] === 'orders') {
        deepLink = `flipkart://orders`;
    }

    // Handle home page
    else if (pathParts.length === 0) {
        deepLink = `flipkart://home`;
    }

    if(!deepLink){
        throw new Error("Some error occured")
    }
    return deepLink;
}

function convertTwitterUrlToDeepLink(urlObj) {
    const pathParts = urlObj.pathname.split('/').filter(Boolean);
    const searchParams = new URLSearchParams(urlObj.search);

    let deepLink = '';

    // Handle specific Tweet
    if (pathParts[0] === 'status') {
        const tweetId = pathParts[1];
        deepLink = `twitter://status?id=${tweetId}`;
    }

    // Handle specific profile
    else if (pathParts[0] === 'user') {
        const username = pathParts[1];
        deepLink = `twitter://user?screen_name=${username}`;
    } else if (pathParts[0] === 'i' && pathParts[1] === 'profiles') {
        const userId = pathParts[2];
        deepLink = `twitter://user?id=${userId}`;
    }

    // Handle search query
    else if (pathParts[0] === 'search' && searchParams.has('q')) {
        const query = searchParams.get('q');
        deepLink = `twitter://search?query=${encodeURIComponent(query)}`;
    }

    // Handle hashtag
    else if (pathParts[0] === 'hashtag') {
        const hashtag = pathParts[1];
        deepLink = `twitter://search?query=%23${hashtag}`;
    }

    // Handle profile by username or ID
    else if (pathParts.length === 1) {
        const identifier = pathParts[0];
        deepLink = `twitter://user?screen_name=${identifier}`;
    }

    if(!deepLink){
        throw new Error("Some error occured")
    }
    return deepLink;
}

function convertAmazonUrlToDeepLink(urlObj) {
    const pathParts = urlObj.pathname.split('/').filter(Boolean);
    const searchParams = new URLSearchParams(urlObj.search);
    
    let deepLink = '';

    // Handle product pages
    if (pathParts[0] === 'gp' && pathParts[1] === 'product') {
        const productId = pathParts[2];
        deepLink = `amazon://dp/${productId}`;
    } else if (pathParts[0] === 'dp') {
        const productId = pathParts[1];
        deepLink = `amazon://dp/${productId}`;
    }

    // Handle variations with query parameters for product pages
    else if (searchParams.has('asin')) {
        const productId = searchParams.get('asin');
        deepLink = `amazon://dp/${productId}`;
    } else if (searchParams.has('node')) {
        const categoryId = searchParams.get('node');
        deepLink = `amazon://category/${categoryId}`;
    }

    // Handle search queries
    else if (pathParts[0] === 's') {
        const query = searchParams.get('k');
        deepLink = `amazon://search/${encodeURIComponent(query)}`;
    }

    // Handle wish lists
    else if (pathParts[0] === 'gp' && pathParts[1] === 'registry' && pathParts[2] === 'wishlist') {
        const listId = pathParts[3];
        deepLink = `amazon://wishlist/${listId}`;
    }

    // Handle orders and cart
    else if (pathParts[0] === 'orders') {
        deepLink = `amazon://orders`;
    } else if (pathParts[0] === 'cart') {
        deepLink = `amazon://cart`;
    }

    // Handle Prime Video
    else if (pathParts[0] === 'gp' && pathParts[1] === 'prime' && pathParts[2] === 'video') {
        deepLink = `amazon://primevideo`;
    }
    
    if (!deepLink) {
        deepLink = `amazon://${urlObj.href.replace("https://", "")}`;
    }

    return deepLink;
}

function convertFacebookUrlToDeepLink(urlObj) {
    const pathParts = urlObj.pathname.split('/').filter(Boolean);
    let deepLink = '';

    // Check the first part of the path to determine the type of content
    switch (pathParts[0]) {
        case 'profile.php': // URL like https://www.facebook.com/profile.php?id=12345
            const profileId = urlObj.searchParams.get('id');
            deepLink = `fb://profile/${profileId}`;
            break;

        case 'pages': // URL like https://www.facebook.com/pages/SomePage/1234567890
            const pageId = pathParts[2];
            deepLink = `fb://page/${pageId}`;
            break;

        case 'groups': // URL like https://www.facebook.com/groups/1234567890
            const groupId = pathParts[1];
            deepLink = `fb://group/${groupId}`;
            break;

        case 'events': // URL like https://www.facebook.com/events/1234567890
            const eventId = pathParts[1];
            deepLink = `fb://event/${eventId}`;
            break;

        case 'watch': // URL like https://www.facebook.com/watch/?v=1234567890
            const videoId = urlObj.searchParams.get('v');
            deepLink = `fb://video/${videoId}`;
            break;

        default:
            if (pathParts.length === 1) {
                // URL like https://www.facebook.com/username or https://www.facebook.com/zuck
                deepLink = `fb://profile/${pathParts[0]}`;
            } else if (pathParts.length === 2 && pathParts[1] === 'posts') {
                // URL like https://www.facebook.com/username/posts/1234567890
                const postId = pathParts[1];
                deepLink = `fb://post/${postId}`;
            } else if (pathParts.length === 3 && pathParts[1] === 'posts') {
                // Handles post URLs with username and postId
                const postId = pathParts[2];
                deepLink = `fb://post/${postId}`;
            }
            break;
    }
    if (!deepLink) {
        deepLink = `fb://${urlObj.href.replace("https://", "")}`;
    }

    return deepLink;
}

function convertYouTubeUrlToDeepLink(urlObj) {
    try {
        const pathParts = urlObj.pathname.split('/').filter(Boolean);
        const searchParams = new URLSearchParams(urlObj.search);

        let deepLink = '';

        // Handle specific video
        if (pathParts[0] === 'watch' && searchParams.has('v')) {
            const videoId = searchParams.get('v');
            deepLink = `youtube://watch?v=${videoId}`;
        }

        // Handle specific playlist
        else if (pathParts[0] === 'playlist' && searchParams.has('list')) {
            const playlistId = searchParams.get('list');
            deepLink = `youtube://playlist?list=${playlistId}`;
        }

        // Handle specific channel
        else if (pathParts[0] === 'channel' && pathParts[1]) {
            const channelId = pathParts[1];
            deepLink = `youtube://channel/${channelId}`;
        }

        // Handle YouTube search query
        else if (pathParts[0] === 'results' && searchParams.has('search_query')) {
            const query = searchParams.get('search_query');
            deepLink = `youtube://search?q=${encodeURIComponent(query)}`;
        }

        // Handle YouTube homepage
        else if (pathParts.length === 0 && urlObj.hostname === 'www.youtube.com') {
            deepLink = `youtube://`;
        }

        // Default case for unsupported URLs
        else {
            return `youtube://${urlObj.href.replace("https://","")}`;
        }

        return deepLink;
    } catch (e) {
        return 'some error occured';
    }
}

const iosdeeplink = (urlObj) => {
    try {
        const hostname = urlObj.hostname;
        let deepLink = '';

        // Check URL hostname to determine the platform
        if (/^www\.youtube\.com$/.test(hostname) || /^youtube\.com$/.test(hostname)) {
            deepLink = convertYouTubeUrlToDeepLink(urlObj);
        } else if (/\.facebook\.com$/.test(hostname)) {
            deepLink = convertFacebookUrlToDeepLink(urlObj);
        } else if (/\.instagram\.com$/.test(hostname)) {
            deepLink = convertInstagramUrlToDeepLink(urlObj);
        } else if (/\.linkedin\.com$/.test(hostname)) {
            deepLink = convertLinkedInUrlToDeepLink(urlObj);
        } else if (/\.amazon\.com$/.test(hostname) || /\.amazon\.in$/.test(hostname)) {
            deepLink = convertAmazonUrlToDeepLink(urlObj);
        } else if (/\.twitter\.com$/.test(hostname)) {
            deepLink = convertTwitterUrlToDeepLink(urlObj);
        } else if (/\.flipkart\.com$/.test(hostname)) {
            deepLink = convertFlipkartUrlToDeepLink(urlObj);
        } else {
            let appname = hostname.split('.').length>2?hostname.split('.')[1]:hostname.split('.')[0];
            return `${appname}://${urlObj.href.replace("https://","")}`;
        }
        return deepLink;
    } catch (e) {
        console.error(e);
        const hostname = urlObj.hostname;
        let appname = hostname.split('.').length>2?hostname.split('.')[1]:hostname.split('.')[0];
        return `${appname}://${urlObj.href.replace("https://","")}`;
    }
}

module.exports = iosdeeplink;