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

/*
progress es para que se vea por consola, pero podemos añadir más.

logLevel
	lOG_INFO, el más bajo <--- NO LOG_DEBUG

	browser para los arrays

	captureTimeout: los ficheros no pueden tardar más de tanti

	reportsSlowerThan: lo que tarda un reporte. 500 es más que suficiente.



*/

// EXPLICAR LOS WILDCARD Y LOS EXCLUDE

// COVERAGE

// https://gist.github.com/fatihacet/c54b6b3e542aea11da86