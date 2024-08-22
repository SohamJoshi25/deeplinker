const Packages = {
    whatsapp: "com.whatsapp",
    youtube: "com.google.android.youtube",
    youtu: "com.google.android.youtube",
    twitter: "com.twitter.android",
    x:"com.twitter.android",
    facebook: "com.facebook.katana",
    messenger: "com.facebook.orca",
    instagram: "com.instagram.android",
    linkedin: "com.linkedin.android",
    snapchat: "com.snapchat.android",
    tiktok: "com.zhiliaoapp.musically",
    pinterest: "com.pinterest",
    reddit: "com.reddit.frontpage",
    telegram: "org.telegram.messenger",
    signal: "org.thoughtcrime.securesms",
    discord: "com.discord",
    skype: "com.skype.raider",
    amazon: "in.amazon.mShop.android.shopping",
    ebay: "com.ebay.mobile",
    walmart: "com.walmart.android",
    flipkart: "com.flipkart.android", 
    myntra: "com.myntra.android", 
    jabon: "com.jabong.android",
    spotify: "com.spotify.music",
    netflix: "com.netflix.mediaclient",
    hulu: "com.hulu.plus",
    disneyplus: "com.disney.disneyplus",
    primevideo: "com.amazon.avod.thirdpartyclient",
    twitch: "tv.twitch.android.app",
    youtubeMusic: "com.google.android.apps.youtube.music",
    hotstar: "in.startv.hotstar", 
    jiotv: "com.jio.media.jiotv", 
    drive: "com.google.android.apps.docs",
    dropbox: "com.dropbox.android",
    onedrive: "com.microsoft.skydrive",
    evernote: "com.evernote",
    trello: "com.trello",
    notion: "notion.id",
    cred: "com.cred.app",
    zoom: "us.zoom.videomeetings",
    teams: "com.microsoft.teams",
    slack: "com.Slack",
    meet: "com.google.android.apps.tachyon",
    jiomeet: "com.jio.jiomeet",
    maps: "com.google.android.apps.maps",
    uber: "com.ubercab",
    lyft: "me.lyft.android",
    airbnb: "com.airbnb.android",
    tripadvisor: "com.tripadvisor.tripadvisor",
    booking: "com.booking",
    ola: "com.olacabs.customer",
    paypal: "com.paypal.android.p2pmobile",
    venmo: "com.venmo",
    cashApp: "com.squareup.cash",
    googlePay: "com.google.android.apps.walletnfcrel",
    paytm: "net.one97.paytm",
    phonepe: "com.phonepe.app",
    razorpay: "com.razorpay.android", 
    gmail: "com.google.android.gm",
    outlook: "com.microsoft.office.outlook",
    calendar: "com.google.android.calendar",
    lastpass: "com.lastpass.lpandroid",
    tinder: "com.tinder",
    bumble: "com.bumble.app",
    okcupid: "com.okcupid.okcupid",
    steam: "com.valvesoftware.android.steam.community",
    playstation: "com.scee.psxandroid",
    xbox: "com.microsoft.xboxone.smartglass",
    flipboard: "flipboard.app",
    nytimes: "com.nytimes.android",
    kindle: "com.amazon.kindle",
    myfitnesspal: "com.myfitnesspal.android",
    fitbit: "com.fitbit.FitbitMobile",
    strava: "com.strava",
    snapseed: "com.niksoftware.snapseed",
    lightroom: "com.adobe.lrmobile",
    canva: "com.canva.editor",
    jiosaavn: "com.jio.media.jiobeats",
    gaana: "com.gaana",
    haptik: "com.haptik.android", 
    urbanClap: "com.urbanclap.consumer", 
    groww: "com.groww.android",
    inshorts: "com.nischt.inshorts",
    lenskart: "com.lenskart.customer", 
    koo: "com.koo.app", 
    navi: "com.navi.app",
    github:"com.github.android" 
}

const PackageName = {
    "www.whatsapp.com": "com.whatsapp",
    "www.youtube.com": "com.google.android.youtube",
    "youtu.be": "com.google.android.youtube",
    "www.twitter.com": "com.twitter.android",
    "twitter.com": "com.twitter.android",
    "x.com": "com.twitter.android",
    "www.facebook.com": "com.facebook.katana",
    "facebook.com": "com.facebook.katana",
    "www.messenger.com": "com.facebook.orca",
    "www.instagram.com": "com.instagram.android",
    "instagram.com": "com.instagram.android",
    "www.linkedin.com": "com.linkedin.android",
    "linkedin.com": "com.linkedin.android",
    "www.snapchat.com": "com.snapchat.android",
    "www.tiktok.com": "com.zhiliaoapp.musically",
    "www.pinterest.com": "com.pinterest",
    "www.reddit.com": "com.reddit.frontpage",
    "www.telegram.org": "org.telegram.messenger",
    "telegram.org": "org.telegram.messenger",
    "www.signal.org": "org.thoughtcrime.securesms",
    "signal.org": "org.thoughtcrime.securesms",
    "discord.com": "com.discord",
    "www.skype.com": "com.skype.raider",
    "www.amazon.com": "in.amazon.mShop.android.shopping",
    "www.amazon.in": "in.amazon.mShop.android.shopping",
    "amazon.com": "in.amazon.mShop.android.shopping",
    "amazon.in": "in.amazon.mShop.android.shopping",
    "www.ebay.com": "com.ebay.mobile",
    "www.walmart.com": "com.walmart.android",
    "www.flipkart.com": "com.flipkart.android",
    "www.myntra.com": "com.myntra.android",
    "www.jabong.com": "com.jabong.android",
    "www.spotify.com": "com.spotify.music",
    "www.netflix.com": "com.netflix.mediaclient",
    "www.hulu.com": "com.hulu.plus",
    "www.disneyplus.com": "com.disney.disneyplus",
    "www.primevideo.com": "com.amazon.avod.thirdpartyclient",
    "www.twitch.tv": "tv.twitch.android.app",
    "music.youtube.com": "com.google.android.apps.youtube.music",
    "www.hotstar.com": "in.startv.hotstar",
    "www.jiotv.com": "com.jio.media.jiotv",
    "drive.google.com": "com.google.android.apps.docs",
    "www.dropbox.com": "com.dropbox.android",
    "onedrive.live.com": "com.microsoft.skydrive",
    "www.evernote.com": "com.evernote",
    "trello.com": "com.trello",
    "www.notion.so": "notion.id",
    "www.cred.club": "com.cred.app",
    "zoom.us": "us.zoom.videomeetings",
    "teams.microsoft.com": "com.microsoft.teams",
    "slack.com": "com.Slack",
    "meet.google.com": "com.google.android.apps.tachyon",
    "www.jiomeet.com": "com.jio.jiomeet",
    "maps.google.com": "com.google.android.apps.maps",
    "www.uber.com": "com.ubercab",
    "www.lyft.com": "me.lyft.android",
    "www.airbnb.com": "com.airbnb.android",
    "www.tripadvisor.com": "com.tripadvisor.tripadvisor",
    "www.booking.com": "com.booking",
    "www.olacabs.com": "com.olacabs.customer",
    "www.paypal.com": "com.paypal.android.p2pmobile",
    "venmo.com": "com.venmo",
    "cash.app": "com.squareup.cash",
    "pay.google.com": "com.google.android.apps.walletnfcrel",
    "www.paytm.com": "net.one97.paytm",
    "www.phonepe.com": "com.phonepe.app",
    "razorpay.com": "com.razorpay.android",
    "mail.google.com": "com.google.android.gm",
    "outlook.live.com": "com.microsoft.office.outlook",
    "calendar.google.com": "com.google.android.calendar",
    "www.lastpass.com": "com.lastpass.lpandroid",
    "tinder.com": "com.tinder",
    "bumble.com": "com.bumble.app",
    "okcupid.com": "com.okcupid.okcupid",
    "store.steampowered.com": "com.valvesoftware.android.steam.community",
    "www.playstation.com": "com.scee.psxandroid",
    "www.xbox.com": "com.microsoft.xboxone.smartglass",
    "www.flipboard.com": "flipboard.app",
    "www.nytimes.com": "com.nytimes.android",
    "www.amazon.com/kindle-dbs/fd/kcp": "com.amazon.kindle",
    "www.myfitnesspal.com": "com.myfitnesspal.android",
    "www.fitbit.com": "com.fitbit.FitbitMobile",
    "www.strava.com": "com.strava",
    "snapseedonline.com": "com.niksoftware.snapseed",
    "lightroom.adobe.com": "com.adobe.lrmobile",
    "www.canva.com": "com.canva.editor",
    "www.jiosaavn.com": "com.jio.media.jiobeats",
    "gaana.com": "com.gaana",
    "www.haptik.ai": "com.haptik.android",
    "www.urbanclap.com": "com.urbanclap.consumer",
    "groww.in": "com.groww.android",
    "inshorts.com": "com.nischt.inshorts",
    "www.lenskart.com": "com.lenskart.customer",
    "www.kooapp.com": "com.koo.app",
    "navi.com": "com.navi.app",
    "github.com": "com.github.android"
}

const urlConversionPairs = {
    "youtu.be": "www.youtube.com/watch?v=",
    "youtube.com":"www.youtube.com",
    "amzn.to": "www.amazon.com/",
    "fb.me": "www.facebook.com/",
    "lnkd.in": "www.linkedin.com/",
    "instagr.am": "www.instagram.com/",
    "t.co": "twitter.com/",
    "pin.it": "www.pinterest.com/pin/",
    "wp.me": "www.wordpress.com/",
}


module.exports = {Packages,PackageName,urlConversionPairs}