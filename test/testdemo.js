
var casper = require('casper').create();
casper.start('http://localhost:63342/bootstrap_wrapper/demo/example.html?_ijt=1n4tguvd4g3gsgb0uk89gugje0');

casper.then(function() {
    this.echo('First Page: ' + this.getTitle());
});

casper.thenOpen('http://phantomjs.org', function() {
    this.echo('Second Page 2: ' + this.getTitle());
});

casper.run();