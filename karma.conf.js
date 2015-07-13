module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    files: [
      'public/lib/angular/angular.js',
      'public/lib/angular-resource/angular-resource.js',
      'public/lib/angular-route/angular-route.js',
      'public/lib/angular-mocks/angular-mocks.js',
      'public/application.js',
      // **/*.js not working for these
      'public/modules/*[a-zA-Z]*/*.js',
      'public/modules/*[a-zA-Z]*/*[!tests]*/*.js',
      'public/modules/*[a-zA-Z]*/tests/unit/*.js'
    ],
    reporters: ['progress'],
    browsers: ['PhantomJS'],
    captureTimeout: 60000,
    singleRun: true
  });
};