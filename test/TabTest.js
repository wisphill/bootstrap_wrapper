casper.options.javascriptEnabled = true;
casper.options.clientScripts.push("/build/dist/app.bundle.js");

casper.test.begin('Run tab tests', 1, function(test) {
    casper.start('http://localhost:81/bootstrap_wrapper/demo/tab.html',
        function() {
            this.echo("OK");
            this.echo(document.all[1].outerHTML);
        })
    .then(function () {
        // test order of tab component
        test.assertExists("#tab0");
    })
    .then(function () {
        test.assertExists("#tab0 > ul > li");
    })
    .then(function () {

    })
    .run(function () {
        test.done();
    });
})


