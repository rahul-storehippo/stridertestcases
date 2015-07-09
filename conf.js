/**
 * Created with JetBrains WebStorm.
 * User: atishay
 * Date: 16/6/15
 * Time: 5:59 PM
 * To change this template use File | Settings | File Templates.
 */
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    chromeOnly: true,
    chromeDriver: './node_modules/protractor/selenium/chromedriver',
    specs: ['spec.js'],
    capabilities: {
        'browserName': 'chrome'
    },
    allScriptsTimeout: 120000,
    jasmineNodeOpts: {defaultTimeoutInterval: 120000},
    getPageTimeout: 120000
    /*  onPrepare: function() {
     // The require statement must be down here, since jasmine-reporters
     // needs jasmine to be in the global and protractor does not guarantee
     // this until inside the onPrepare function.
     require('jasmine-reporters');
     jasmine.getEnv().addReporter(
     new jasmine.JUnitXmlReporter('xmloutput', true, true));
     }*/
};