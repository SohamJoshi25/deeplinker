/*
    PLEASE ENSURE THAT WHEN ADDING PAIRS TO "urlConverionPairs" , ALSO ADD RESPECTIVE HOST NAME TO "AppStoreLinks" AND "PackageName".
*/

const AppStoreLinks = {
  "www.whatsapp.com": "https://apps.apple.com/in/app/whatsapp-messenger/id310633997",
  "www.youtube.com": "https://apps.apple.com/in/app/youtube-watch-listen-stream/id544007664",
  "youtu.be": "https://apps.apple.com/in/app/youtube-watch-listen-stream/id544007664",
  "www.twitter.com": "https://apps.apple.com/in/app/x/id333903271",
  "twitter.com": "https://apps.apple.com/in/app/x/id333903271",
  "x.com": "https://apps.apple.com/in/app/x/id333903271",
  "www.facebook.com": "https://apps.apple.com/in/app/facebook/id284882215",
  "facebook.com": "https://apps.apple.com/in/app/facebook/id284882215",
  "www.messenger.com": "https://apps.apple.com/in/app/messenger/id454638411",
  "www.instagram.com": "https://apps.apple.com/in/app/instagram/id389801252",
  "instagram.com": "https://apps.apple.com/in/app/instagram/id389801252",
  "www.linkedin.com": "https://apps.apple.com/in/app/linkedin-job-search-news/id288429040",
  "linkedin.com":     "https://apps.apple.com/in/app/linkedin-job-search-news/id288429040",
  "www.snapchat.com": "https://apps.apple.com/in/app/snapchat/id447188370",
  "www.tiktok.com": "https://apps.apple.com/in/app/tiktok/id835599320",
  "www.pinterest.com": "https://apps.apple.com/in/app/pinterest/id429047995",
  "www.reddit.com": "https://apps.apple.com/in/app/reddit/id1064216828",
  "reddit.app.link": "https://apps.apple.com/in/app/reddit/id1064216828",
  "www.telegram.org": "https://apps.apple.com/in/app/telegram-messenger/id686449807",
  "telegram.org": "https://apps.apple.com/in/app/telegram-messenger/id686449807",
  "www.signal.org": "https://apps.apple.com/in/app/signal-private-messenger/id874139669",
  "signal.org": "https://apps.apple.com/in/app/signal-private-messenger/id874139669",
  "discord.com": "https://apps.apple.com/in/app/discord-talk-play-hang-out/id985746746",
  "www.skype.com": "https://apps.apple.com/in/app/skype/id304878510",
  "www.amazon.com": "https://apps.apple.com/in/app/amazon-shopping/id297606951",
  "www.amazon.in": "https://apps.apple.com/in/app/amazon-india-shop-pay-minitv/id1478350915",
  "amazon.com": "https://apps.apple.com/in/app/amazon-shopping/id297606951",
  "amazon.in": "https://apps.apple.com/in/app/amazon-india-shop-pay-minitv/id1478350915",
  "www.ebay.com": "https://apps.apple.com/in/app/ebay-buy-sell-sneakers/id282614216",
  "www.walmart.com": "https://apps.apple.com/in/app/walmart-shopping-grocery/id338137227",
  "www.flipkart.com": "https://apps.apple.com/in/app/flipkart/id742044692",
  "www.myntra.com": "https://apps.apple.com/in/app/myntra-fashion-shopping-app/id907394059",
  "www.jabong.com": "https://apps.apple.com/in/app/jabong/id1059232517",
  "www.spotify.com": "https://apps.apple.com/in/app/spotify-music-and-podcasts/id324684580",
  "www.netflix.com": "https://apps.apple.com/in/app/netflix/id363590051",
  "www.hulu.com": "https://apps.apple.com/in/app/hulu-stream-tv-movies-more/id376510438",
  "www.disneyplus.com": "https://apps.apple.com/in/app/disney/id1446075923",
  "www.primevideo.com": "https://apps.apple.com/in/app/amazon-prime-video/id545519333",
  "www.twitch.tv": "https://apps.apple.com/in/app/twitch-live-game-streaming/id460177396",
  "music.youtube.com": "https://apps.apple.com/in/app/youtube-music/id1017492454",
  "www.hotstar.com": "https://apps.apple.com/in/app/disney-hotstar/id934459219",
  "www.jiotv.com": "https://apps.apple.com/in/app/jiotv-live-sports-tv-shows/id1068801742",
  "drive.google.com": "https://apps.apple.com/in/app/google-drive/id507874739",
  "www.dropbox.com": "https://apps.apple.com/in/app/dropbox-backup-sync-share/id327630330",
  "onedrive.live.com": "https://apps.apple.com/in/app/microsoft-onedrive/id477537958",
  "www.evernote.com": "https://apps.apple.com/in/app/evernote-note-organizer/id281796108",
  "trello.com": "https://apps.apple.com/in/app/trello/id461504587",
  "www.notion.so": "https://apps.apple.com/in/app/notion-notes-tasks-wikis/id1232780281",
  "www.cred.club": "https://apps.apple.com/in/app/cred/id1428580080",
  "zoom.us": "https://apps.apple.com/in/app/zoom-one-platform-to-connect/id546505307",
  "teams.microsoft.com": "https://apps.apple.com/in/app/microsoft-teams/id1113153706",
  "slack.com": "https://apps.apple.com/in/app/slack/id618783545",
  "meet.google.com": "https://apps.apple.com/in/app/google-meet/id1013231476",
  "www.jiomeet.com": "https://apps.apple.com/in/app/jiomeet/id1502610303",
  "maps.google.com": "https://apps.apple.com/in/app/google-maps/id585027354",
  "www.uber.com": "https://apps.apple.com/in/app/uber-request-a-ride/id368677368",
  "www.lyft.com": "https://apps.apple.com/in/app/lyft/id529379082",
  "www.airbnb.com": "https://apps.apple.com/in/app/airbnb/id401626263",
  "www.tripadvisor.com": "https://apps.apple.com/in/app/tripadvisor-hotels-restaurants/id284876795",
  "www.booking.com": "https://apps.apple.com/in/app/booking-com-hotels-travel/id367003839",
  "www.olacabs.com": "https://apps.apple.com/in/app/ola-cabs/id875344126",
  "www.paypal.com": "https://apps.apple.com/in/app/paypal/id283646709",
  "venmo.com": "https://apps.apple.com/in/app/venmo/id351727428",
  "cash.app": "https://apps.apple.com/in/app/cash-app/id711923939",
  "pay.google.com": "https://apps.apple.com/in/app/google-pay/id1193357041",
  "www.paytm.com": "https://apps.apple.com/in/app/paytm/id473941634",
  "www.phonepe.com": "https://apps.apple.com/in/app/phonepe/id1170055821",
  "razorpay.com": "https://apps.apple.com/in/app/razorpay/id1291440571",
  "mail.google.com": "https://apps.apple.com/in/app/gmail-email-by-google/id422689480",
  "outlook.live.com": "https://apps.apple.com/in/app/microsoft-outlook/id951937596",
  "calendar.google.com": "https://apps.apple.com/in/app/google-calendar/id909319292",
  "www.lastpass.com": "https://apps.apple.com/in/app/lastpass-password-manager/id324613447",
  "tinder.com": "https://apps.apple.com/in/app/tinder/id547702041",
  "bumble.com": "https://apps.apple.com/in/app/bumble-dating-friends-bizz/id930441707",
  "okcupid.com": "https://apps.apple.com/in/app/okcupid-online-dating-app/id338701294",
  "store.steampowered.com": "https://apps.apple.com/in/app/steam-mobile/id495369748",
  "www.playstation.com": "https://apps.apple.com/in/app/ps-app/id410896080",
  "www.xbox.com": "https://apps.apple.com/in/app/xbox/id736179781",
  "www.flipboard.com": "https://apps.apple.com/in/app/flipboard-latest-stories/id358801284",
  "www.nytimes.com": "https://apps.apple.com/in/app/the-new-york-times/id284862083",
  "www.amazon.com/kindle-dbs/fd/kcp": "https://apps.apple.com/in/app/amazon-kindle/id302584613",
  "www.myfitnesspal.com": "https://apps.apple.com/in/app/myfitnesspal-calorie-counter/id341232718",
  "www.fitbit.com": "https://apps.apple.com/in/app/fitbit-health-fitness/id462638897",
  "www.strava.com": "https://apps.apple.com/in/app/strava-run-ride-hike/id426826309",
  "snapseedonline.com": "https://apps.apple.com/in/app/snapseed/id439438619",
  "lightroom.adobe.com": "https://apps.apple.com/in/app/adobe-lightroom-photo-editor/id878783582",
  "www.canva.com": "https://apps.apple.com/in/app/canva-design-photo-video/id897446215",
  "www.jiosaavn.com": "https://apps.apple.com/in/app/jiosaavn-music-radio-podcasts/id441813332",
  "gaana.com": "https://apps.apple.com/in/app/gaana-song-hotshots-videos/id585270521",
  "www.haptik.ai": "https://apps.apple.com/in/app/haptik/id830344183",
  "www.urbanclap.com": "https://apps.apple.com/in/app/urbanclap-services/id1032510821",
  "groww.in": "https://apps.apple.com/in/app/groww-stocks-mutual-funds/id1442927758",
  "inshorts.com": "https://apps.apple.com/in/app/inshorts/id892146527",
  "www.lenskart.com": "https://apps.apple.com/in/app/lenskart/id956366078",
  "www.kooapp.com": "https://apps.apple.com/in/app/koo/id1498234681",
  "navi.com": "https://apps.apple.com/in/app/navi-loans-health-insurance/id1444942740",
  "github.com": "https://apps.apple.com/in/app/github/id1477376905"
};


const PackageName = {
    "www.google.com":"",
    "google.com":"",
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
    "reddit.app.link": "com.reddit.frontpage",
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


const timeZoneCountryMapping = {
    "Africa/Accra": "gh",
    "Africa/Bamako": "ml",
    "Africa/Banjul": "gm",
    "Africa/Conakry": "gn",
    "Africa/Dakar": "sn",
    "Africa/Freetown": "sl",
    "Africa/Lome": "tg",
    "Africa/Nouakchott": "mr",
    "Africa/Ouagadougou": "bf",
    "Africa/Timbuktu": "ml",
    "Atlantic/Reykjavik": "is",
    "Atlantic/St_Helena": "sh",
    "Africa/Maseru": "ls",
    "Africa/Mbabane": "sz",
    "Africa/Bangui": "cf",
    "Africa/Brazzaville": "cg",
    "Africa/Douala": "cm",
    "Africa/Kinshasa": "cd",
    "Africa/Libreville": "ga",
    "Africa/Luanda": "ao",
    "Africa/Malabo": "gq",
    "Africa/Niamey": "ne",
    "Africa/Porto-Novo": "bj",
    "Africa/Blantyre": "mw",
    "Africa/Bujumbura": "bi",
    "Africa/Gaborone": "bw",
    "Africa/Harare": "zw",
    "Africa/Kigali": "rw",
    "Africa/Lubumbashi": "cd",
    "Africa/Lusaka": "zm",
    "Africa/Addis_Ababa": "et",
    "Africa/Asmara": "er",
    "Africa/Asmera": "er",
    "Africa/Dar_es_Salaam": "tz",
    "Africa/Djibouti": "dj",
    "Africa/Kampala": "ug",
    "Africa/Mogadishu": "so",
    "Indian/Antananarivo": "mg",
    "Indian/Comoro": "km",
    "Indian/Mayotte": "yt",
    "Libya": "ly",
    "America/Atka": "us",
    "America/Aleutian": "us",
    "US/Alaska": "us",
    "America/Buenos_Aires": "ar",
    "America/Argentina/ComodRivadavia": "ar",
    "America/Catamarca": "ar",
    "America/Cordoba": "ar",
    "America/Rosario": "ar",
    "America/Jujuy": "ar",
    "America/Mendoza": "ar",
    "US/Central": "us",
    "America/Shiprock": "us",
    "Navajo": "us",
    "US/Mountain": "us",
    "US/Michigan": "us",
    "America/Yellowknife": "ca",
    "Canada/Mountain": "ca",
    "Canada/Atlantic": "ca",
    "Cuba": "cu",
    "America/Fort_Wayne": "us",
    "America/Indianapolis": "us",
    "US/East-Indiana": "us",
    "America/Knox_IN": "us",
    "US/Indiana-Starke": "us",
    "America/Pangnirtung": "ca",
    "Jamaica": "jm",
    "America/Louisville": "us",
    "US/Pacific": "us",
    "Brazil/West": "br",
    "Mexico/BajaSur": "mx",
    "Mexico/General": "mx",
    "US/Eastern": "us",
    "Brazil/DeNoronha": "br",
    "America/Godthab": "gl",
    "America/Atikokan": "pa",
    "America/Cayman": "pa",
    "America/Coral_Harbour": "pa",
    "America/Creston": "us",
    "US/Arizona": "us",
    "America/Anguilla": "ai",
    "America/Antigua": "ag",
    "America/Aruba": "aw",
    "America/Blanc-Sablon": "ca",
    "America/Curacao": "cw",
    "America/Dominica": "dm",
    "America/Grenada": "gd",
    "America/Guadeloupe": "gp",
    "America/Kralendijk": "bq",
    "America/Lower_Princes": "sx",
    "America/Marigot": "mf",
    "America/Montserrat": "ms",
    "America/Port_of_Spain": "tt",
    "America/St_Barthelemy": "bl",
    "America/St_Kitts": "kn",
    "America/St_Lucia": "lc",
    "America/St_Thomas": "vi",
    "America/St_Vincent": "vc",
    "America/Tortola": "vg",
    "America/Virgin": "vi",
    "Canada/Saskatchewan": "ca",
    "America/Porto_Acre": "br",
    "Brazil/Acre": "br",
    "Chile/Continental": "cl",
    "Brazil/East": "br",
    "Canada/Newfoundland": "ca",
    "America/Ensenada": "mx",
    "America/Santa_Isabel": "mx",
    "Mexico/BajaNorte": "mx",
    "America/Montreal": "ca",
    "America/Nassau": "bs",
    "America/Nipigon": "ca",
    "America/Thunder_Bay": "ca",
    "Canada/Eastern": "ca",
    "Canada/Pacific": "ca",
    "Canada/Yukon": "ca",
    "America/Rainy_River": "ca",
    "Canada/Central": "ca",
    "America/Ashkhabad": "tm",
    "Asia/Phnom_Penh": "kh",
    "Asia/Vientiane": "la",
    "Indian/Christmas": "cx",
    "Asia/Dacca": "bd",
    "Asia/Muscat": "om",
    "Indian/Mahe": "sc",
    "Indian/Reunion": "re",
    "Asia/Saigon": "vn",
    "Hongkong": "hk",
    "Asia/Tel_Aviv": "il",
    "Israel": "il",
    "Asia/Katmandu": "np",
    "Asia/Calcutta": "in",
    "Asia/Brunei": "bn",
    "Asia/Macao": "mo",
    "Asia/Ujung_Pandang": "id",
    "Europe/Nicosia": "cy",
    "Asia/Bahrain": "bh",
    "Asia/Aden": "ye",
    "Asia/Kuwait": "kw",
    "ROK": "kr",
    "Asia/Chongqing": "cn",
    "Asia/Chungking": "cn",
    "Asia/Harbin": "cn",
    "PRC": "cn",
    "Asia/Kuala_Lumpur": "my",
    "Singapore": "sg",
    "ROC": "tw",
    "Iran": "ir",
    "Asia/Thimbu": "bt",
    "Japan": "jp",
    "Asia/Ulan_Bator": "mn",
    "Asia/Kashgar": "cn",
    "Asia/Rangoon": "mm",
    "Indian/Cocos": "cc",
    "Atlantic/Faeroe": "fo",
    "Australia/South": "au",
    "Australia/Queensland": "au",
    "Australia/Yancowinna": "au",
    "Australia/North": "au",
    "Australia/Currie": "au",
    "Australia/Tasmania": "au",
    "Australia/LHI": "au",
    "Australia/Victoria": "au",
    "Australia/West": "au",
    "Australia/ACT": "au",
    "Australia/Canberra": "au",
    "Australia/NSW": "au",
    "Europe/Ljubljana": "si",
    "Europe/Podgorica": "me",
    "Europe/Sarajevo": "ba",
    "Europe/Skopje": "mk",
    "Europe/Zagreb": "hr",
    "Arctic/Longyearbyen": "sj",
    "Atlantic/Jan_Mayen": "no",
    "Europe/Copenhagen": "dk",
    "Europe/Oslo": "no",
    "Europe/Stockholm": "se",
    "Europe/Amsterdam": "nl",
    "Europe/Luxembourg": "lu",
    "Europe/Tiraspol": "md",
    "Eire": "ie",
    "Europe/Mariehamn": "fi",
    "Asia/Istanbul": "tr",
    "Turkey": "tr",
    "Europe/Kiev": "ua",
    "Europe/Uzhgorod": "ua",
    "Europe/Zaporozhye": "ua",
    "Portugal": "pt",
    "Europe/Belfast": "gb",
    "Europe/Guernsey": "gb",
    "Europe/Isle_of_Man": "gb",
    "Europe/Jersey": "gb",
    "GB": "gb",
    "GB-Eire": "gb",
    "W-SU": "ru",
    "Europe/Monaco": "mc",
    "Europe/Bratislava": "sk",
    "Europe/San_Marino": "sm",
    "Europe/Vatican": "va",
    "Poland": "pl",
    "Europe/Busingen": "de",
    "Europe/Vaduz": "li",
    "Indian/Kerguelen": "tf",
    "Antarctica/McMurdo": "nz",
    "Antarctica/South_Pole": "nz",
    "NZ": "nz",
    "NZ-CHAT": "nz",
    "Chile/EasterIsland": "cl",
    "Pacific/Pohnpei": "fm",
    "Pacific/Ponape": "fm",
    "Pacific/Saipan": "mp",
    "Pacific/Johnston": "us",
    "US/Hawaii": "us",
    "Pacific/Enderbury": "ki",
    "Kwajalein": "mh",
    "Pacific/Midway": "us",
    "Pacific/Samoa": "ws",
    "US/Samoa": "as",
    "Antarctica/DumontDUrville": "pf",
    "Pacific/Chuuk": "fm",
    "Pacific/Truk": "fm",
    "Pacific/Yap": "fm",
    "Pacific/Funafuti": "tv",
    "Pacific/Majuro": "mh",
    "Pacific/Wake": "us",
    "Pacific/Wallis": "wf"
};


const specialConversionPairs = {
  "https://www.reddit.com/":"https://reddit.app.link/?$android_deeplink_path=reddit/",
}

module.exports = {AppStoreLinks,PackageName,timeZoneCountryMapping,specialConversionPairs}