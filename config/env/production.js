module.exports = {

    db: process.env.DATABASE,

    sessionSecret: process.env.SESSION_SECRET,

    facebook: {
        clientID: process.env.FB_CLIENT_ID,
        clientSecret: process.env.FB_CLIENT_SECRET,
        callbackURL: process.env.FB_CALLBACK_URL
    },

    twitter: {
        clientID: process.env.TW_CLIENT_ID,
        clientSecret: process.env.TW_CLIENT_SECRET,
        callbackURL: process.env.TW_CALLBACK_URL
    },

    google: {
        clientID: process.env.G_CLIENT_ID,
        clientSecret: process.env.G_CLIENT_SECRET,
        callbackURL: process.env.G_CALLBACK_URL
    }
};