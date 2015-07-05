var mongoose = require('mongoose');
var crypto = require('crypto');
var Schema = mongoose.Schema;

var urlModifier = function(url) {
    if (!url) {
        return url;
    } else {
        if (url.indexOf('http://') !== 0   && url.indexOf('https://') !== 0) {
            url = 'http://' + url;
        }
        return url;
    }
}

var UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        unique: true,
        unique: 'That email is already taken',
        match: [/.+\@.+\..+/, 'Please use a valid e-mail address']
    },
    website: {
        type: String,
        set: urlModifier
    },
    username: {
        type: String,
        trim: true,
        required: 'Username is required',
        unique: true
    },
    password: {
        type: String,
        validate: [
          function(password) {
            return password && password.length >= 6;
          },
        'Password should be longer'
        ]
    },
    salt: {
        type: String
    },
    provider: {
        type: String,
        required: 'Provider is required'
    },
    providerId: String,
    providerData: {},
    createdAt: {
        type: Date,
        default: Date.now
    },
    role: {
        type: String,
        enum: ['admin', 'owner', 'user']
    }
});

//virtual property not actually in the schema
UserSchema.virtual('fullName').get(function() {
    return this.firstName + ' ' + this.lastName;
}).set(function(fullName) {
    var splitName = fullName.split(' ');
    this.firstName = splitName[0] || '';
    this.lastName = splitName[1] || '';
});

UserSchema.pre('save', function(next) {
    if(this.password) {
        this.salt = new Buffer(crypto.randomBytes(16).toString('base64'), 'base64');
        this.password = this.hashPassword(this.password);
    }

    next();
});

UserSchema.methods.hashPassword = function(password) {
    return crypto.pbkdf2Sync(password, this.salt, 10000, 64).toString('base64');
};

UserSchema.methods.authenticate = function(password) {
    return this.password === this.hashPassword(password);
};

UserSchema.statics.findUniqueUsername = function(username, suffix, callback) {
    var _this = this;
    var possibleUsername = username + (suffix || '');

    _this.findOne({
        username: possibleUsername
    }, function(err, user) {
        if(!err) {
            if(!user) {
                callback(possibleUsername);
            } else {
                return _this.findUniqueUsername(username, (suffix || 0) + 1, callback);
            }
        } else {
            callback(null);
        }
    });
};

//lets mongoose know to include getters and virtuals in json output
UserSchema.set('toJSON', { getters: true, virtuals: true });

mongoose.model('User', UserSchema);