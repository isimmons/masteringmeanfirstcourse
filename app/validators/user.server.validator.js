//this file not in use at the moment.
//looking into cleaning things up by moving validation to a set of
//validator functions in this separate file for use in the model schema
module.exports = {
    passwordValidator: function(password) {
        return password.length >= 6;
    }

    // add more validators for the user shema
};
