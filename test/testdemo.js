var casper = require('casper').create({
    pageSettings: {
        loadImages:  true,
        loadPlugins: true,
        javascriptEnabled: true,
        localToRemoteUrlAccessEnabled: true,
        XSSAuditingEnabled: true,
        clientScripts: ['build/dist/app.bundle.js']
    }
});
// Imitate a real browser
casper.viewportSize = { width: 1440, height: 900 };
casper.userAgent = "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.106 Safari/537.36";

var page = require("webpage").create(),
    url = "http://localhost:81/bootstrap_wrapper/demo/tab.html";

page.onResourceReceived = function() {
    page.injectJs('build/dist/app.bundle.js')
};

function onPageReady() {
    var htmlContent = page.evaluate(function () {
        return document.documentElement.innerHTML;
    });

    console.log(page.content);

    phantom.exit();
}

page.open(url, function (status) {
    function checkReadyState() {
        setTimeout(function () {
            var readyState = page.evaluate(function () {
                return document.readyState;
            });

            if ("complete" === readyState) {
                onPageReady();
            } else {
                checkReadyState();
            }
        });
    }

    checkReadyState();
});

casper.start('http://localhost:81/bootstrap_wrapper/demo/tab.html', function() {
    this.echo('Test');
    if (this.exists('tab')) {
        this.echo('the heading exists');
    }

    this.echo(this.getElementAttribute('tab-item', 'active'));
    this.echo(this.evaluate(function() {
        return $('#tab0').length;
    }));
});

casper.waitForSelector('#tab0', function () {
    this.echo(this.getHTML())
});
casper.run();