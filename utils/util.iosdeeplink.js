//Functional Testing done : All Passed 
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
    else if (pathParts[0] === 'feed' && pathParts[1] === 'update' && pathParts[2]) {
        const postId = pathParts[2];
        deepLink = `linkedin://post/${postId}`;
    }

    // Handle specific job posting
    else if (pathParts[0] === 'jobs' && pathParts[1] === 'view' && pathParts[2]) {
        const jobId = pathParts[2];
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

    // Handle my network page
    else if (pathParts[0] === 'mynetwork' && pathParts[1] === 'invite-connect' && pathParts[2] === 'connections') {
        deepLink = `linkedin://connections`;
    }

    if(!deepLink){
        return `linkedin:/${urlObj.href.substring(urlObj.origin.length)}`;
    }
    return deepLink;
}

//Functional Testing Done : All Passed
function convertInstagramUrlToDeepLink(urlObj) {
    const pathParts = urlObj.pathname.split('/').filter(Boolean);
    const searchParams = new URLSearchParams(urlObj.search);
  
    let deepLink = '';
  
    // Handle specific user profile
    if (pathParts.length === 1 && pathParts[0] && pathParts[0] !== 'explore') {
      // Case: https://www.instagram.com/username/
      const username = pathParts[0];
      deepLink = `instagram://user?username=${username}`;
    } else if (pathParts[0] === 'p' && pathParts[1]) {
      // Case: https://www.instagram.com/p/postid/
      const postId = pathParts[1];
      deepLink = `instagram://media?id=${postId}`;
    } else if (pathParts[0] === 'explore' && pathParts[1] === 'tags' && pathParts[2]) {
      // Case: https://www.instagram.com/explore/tags/hashtag/
      const hashtag = pathParts[2];
      deepLink = `instagram://tag?name=${hashtag}`;
    } else if (pathParts[0] === 'explore' && searchParams.has('q')) {
      // Case: https://www.instagram.com/explore/?q=search-term
      const query = searchParams.get('q');
      deepLink = `instagram://search?query=${encodeURIComponent(query)}`;
    } else if (pathParts[0] === 'direct' && pathParts[1] === 'inbox') {
      // Case: https://www.instagram.com/direct/inbox/
      deepLink = `instagram://direct/inbox`;
    } else if (pathParts[0] === 'stories' && pathParts[1]) {
      // Case: https://www.instagram.com/stories/username/
      const username = pathParts[1];
      deepLink = `instagram://story?user=${username}`;
    } else if (pathParts.length === 0 && urlObj.hostname === 'www.instagram.com') {
      // Case: https://www.instagram.com/
      deepLink = `instagram://explore`;
    } else if (pathParts[0] === 'explore' && pathParts.length === 1) {
      // Case: https://www.instagram.com/explore/
      deepLink = `instagram://explore`;
    } else if (pathParts[0] === 'reels') {
      // Case: https://www.instagram.com/reels/
      deepLink = `instagram://reels`;
    } else if (pathParts[0] === 'shopping') {
      // Case: https://www.instagram.com/shopping/
      deepLink = `instagram://shopping`;
    } else {
      throw new Error("Unhandled URL format");
    }
  
    return deepLink;
}

//Functional Testing Done : All Passed
function convertFlipkartUrlToDeepLink(urlObj) {
    const pathParts = urlObj.pathname.split('/').filter(Boolean);
    const searchParams = new URLSearchParams(urlObj.search);

    let deepLink = '';
    
    // Handle search queries
    if (searchParams.has('q')) {
        const query = searchParams.get('q');
        deepLink = `flipkart://search?q=${encodeURIComponent(query)}`;
    }

    // Handle offers page
    else if (pathParts[0] === 'offers') {
        deepLink = `flipkart://offers`;
    }


    // Handle cart page
    else if (pathParts[0] === 'cart') {
        deepLink = `flipkart://cart`;
    }

    // Handle wishlist page
    else if (pathParts[0] === 'wishlist') {
        deepLink = `flipkart://wishlist`;
    }

    // Handle orders page
    else if (pathParts[0] === 'orders') {
        deepLink = `flipkart://orders`;
    }
    
    // Handle category page
    else if (pathParts.length === 1 && !searchParams.has('q') && pathParts[0] !== 'offers') {
        const categoryId = pathParts[0];
        deepLink = `flipkart://category/${categoryId}`;
    }

    // Handle user profile page
    else if (pathParts[0] === 'user' && pathParts[1] === 'profile') {
        deepLink = `flipkart://profile`;
    }
    
    // Handle specific product page
    else if (pathParts.length > 1) {
        const productId = pathParts[pathParts.length - 1];
        deepLink = `flipkart://product/${productId}`;
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


//Functional Testing Done : All Passed
function convertTwitterUrlToDeepLink(urlObj) {
    const pathParts = urlObj.pathname.split('/').filter(Boolean);
    const searchParams = new URLSearchParams(urlObj.search);

    let deepLink = '';

    // Handle specific Tweet
    if (pathParts.length >= 2 && pathParts[0] === 'status') {
        const tweetId = pathParts[1];
        deepLink = `twitter://status?id=${tweetId}`;
    }

    // Handle specific profile
    else if (pathParts.length === 1 && !searchParams.has('q')) {
        const username = pathParts[0];
        deepLink = `twitter://user?screen_name=${username}`;
    } else if (pathParts[0] === 'user' && pathParts.length === 2) {
        const username = pathParts[1];
        deepLink = `twitter://user?screen_name=${username}`;
    } else if (pathParts[0] === 'i' && pathParts[1] === 'profiles') {
        const userId = pathParts[2];
        deepLink = `twitter://user?id=${userId}`;
    }

    // Handle search query
    else if (urlObj.pathname === '/search') {
        const query = searchParams.get('q');
        if (query) {
            deepLink = `twitter://search?query=${encodeURIComponent(query)}`;
        } else {
            throw new Error("Search query not found");
        }
    }

    // Handle hashtag
    else if (pathParts[0] === 'hashtag') {
        const hashtag = pathParts[1];
        deepLink = `twitter://search?query=%23${hashtag}`;
    }

    // Handle lists
    else if (pathParts[0] === 'i' && pathParts[1] === 'lists') {
        const listId = pathParts[2];
        deepLink = `twitter://lists?list_id=${listId}`;
    }

    if (!deepLink) {
        throw new Error("Unrecognized URL format");
    }

    return deepLink;
}

//Functional Testing Done : All Passed
function convertAmazonUrlToDeepLink(urlObj) {
    const pathParts = urlObj.pathname.split('/').filter(Boolean);
    const searchParams = new URLSearchParams(urlObj.search);
  
    let deepLink = '';
  
    // Handle standard product pages (e.g., /dp/B06Y4L8C6X)
    if (pathParts.includes('dp')) {
      const productId = pathParts[pathParts.indexOf('dp') + 1];
      deepLink = `amazon://dp/${productId}`;
    }
    // Handle product pages with 'asin' query parameter
    else if (searchParams.has('asin')) {
      const productId = searchParams.get('asin');
      deepLink = `amazon://dp/${productId}`;
    }
    // Handle categories with 'node' query parameter
    else if (searchParams.has('node')) {
      const categoryId = searchParams.get('node');
      deepLink = `amazon://category/${categoryId}`;
    }
    // Handle search queries with 'k' query parameter
    else if (pathParts[0] === 's' || searchParams.has('k')) {
        let query = searchParams.get('k') || searchParams.get('field-keywords');
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
    // Default case for other URLs
    else {
      deepLink = `amazon://${urlObj.hostname}${urlObj.pathname}`;
    }
  
    return deepLink;
}

//Functional Testing Done : All Passed
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
            const pageId = pathParts[1];
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

        case 'photo.php': // URL like https://www.facebook.com/photo.php?fbid=1234567890123456
            const photoId = urlObj.searchParams.get('fbid');
            deepLink = `fb://photo/${photoId}`;
            break;

        case 'video.php': // URL like https://www.facebook.com/video.php?v=1234567890123456
            const videoPhpId = urlObj.searchParams.get('v');
            deepLink = `fb://video/${videoPhpId}`;
            break;

        default:
            if (pathParts.length === 1) {
                // URL like https://www.facebook.com/username or https://www.facebook.com/zuck
                deepLink = `fb://page/${pathParts[0]}`;
            } else if (pathParts.length === 2 && pathParts[1] === 'posts') {
                // URL like https://www.facebook.com/username/posts/1234567890
                const postId = pathParts[2];
                deepLink = `fb://post/${postId}`;
            } else if (pathParts.length === 3 && pathParts[1] === 'posts') {
                // Handles post URLs with username and postId
                const postId = pathParts[2];
                deepLink = `fb://post/${postId}`;
            } else if (pathParts.length === 2) {
                // URL like https://www.facebook.com/groups/123456789012345
                const groupId = pathParts[1];
                deepLink = `fb://group/${groupId}`;
            } else if (pathParts.length === 2) {
                // URL like https://www.facebook.com/events/123456789012345
                const eventId = pathParts[1];
                deepLink = `fb://event/${eventId}`;
            }
            break;
    }

    if (urlObj.searchParams.has('q')) {
        const query = urlObj.searchParams.get('q');
        deepLink = `fb://search?q=${encodeURIComponent(query)}`;
    }

    if (!deepLink) {
        deepLink = `fb://${urlObj.href.replace("https://", "")}`;
    }

    return deepLink;
}

//Functional Testing Done : All Passed
function convertYouTubeUrlToDeepLink(urlObj) {
    try {
        const pathParts = urlObj.pathname.split('/').filter(Boolean);
        const searchParams = new URLSearchParams(urlObj.search);

        let deepLink = '';

        // Handle specific video
        if (pathParts[0] === 'watch' && searchParams.has('v')) {
            const videoId = searchParams.get('v');
            let timestamp = '';
            if (searchParams.has('t')) {
                timestamp = `&t=${searchParams.get('t')}`;
            }
            deepLink = `youtube://video?id=${videoId}${timestamp}`;
        }

        // Handle shortened video URL
        else if (urlObj.hostname === 'youtu.be') {
            const videoId = pathParts[0];
            deepLink = `youtube://video?id=${videoId}`;
        }

        // Handle specific playlist
        else if (pathParts[0] === 'playlist' && searchParams.has('list')) {
            const playlistId = searchParams.get('list');
            deepLink = `youtube://playlist?id=${playlistId}`;
        }

        // Handle specific channel
        else if (pathParts[0] === 'channel' && pathParts[1]) {
            const channelId = pathParts[1];
            deepLink = `youtube://channel?id=${channelId}`;
        }

        // Handle user URL
        else if (pathParts[0] === 'user' && pathParts[1]) {
            const username = pathParts[1];
            deepLink = `youtube://user?username=${username}`;
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

        // Handle YouTube Music URLs
        else if (urlObj.hostname === 'music.youtube.com') {
            if (searchParams.has('v')) {
                const videoId = searchParams.get('v');
                deepLink = `youtube://video?id=${videoId}`;
            } else if (searchParams.has('list')) {
                const playlistId = searchParams.get('list');
                deepLink = `youtube://playlist?id=${playlistId}`;
            }
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