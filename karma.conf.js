// karma.conf.js
module.exports = function(config) {
  config.set({
    basePath: '',
    files: [
      'src/js/*.js',
      'tests/**/*.js'
    ],
    exclude: [],
    preprocessors: {
      'src/js/*.js': ['eslint'],
      'src/js/*.js': ['coverage']
    },
    reporters: ['progress', 'html', 'coverage'],    
    frameworks: ['jasmine'],
   // browsers: ['Chrome', 'PhantomJS', 'Firefox', 'IE'],
    browsers: ['PhantomJS', 'Chrome'],
    singleRun: true,

    htmlReporter: {
      outputDir: 'karma_html',
      templatePath: null,
      focusOnFailures: true,
      namedFiles: false,
      pageTitle: null,
      urlFriendlyName: false,
      reportName: 'report-summary-filename',
    },

    eslint: {
      stopOnError: false,
      stopOnWarning: true
    },
   
    coverageReporter: {
      type : 'html',
      dir : 'coverage/',
      includeAllSources: true
    } 

  });
};
