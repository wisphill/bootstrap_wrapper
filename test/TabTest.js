casper.test.begin('Test tab ------------------------------------------------------------', 1, function(test) {
    casper.start('http://localhost:81/bootstrap_wrapper/demo/tab.html', function() {
        test.assert(true);
    })

        .then(function () {
            // test existance of tab component
            test.assertExists("tab");
            test.assertExists("tab > tab-item");
            test.assertExists("tab > tab-item > tab-title");
            test.assertExists("tab > tab-item > tab-content");
            test.assertExists("div");

        })

        .then(function(){
            this.echo(document.querySelector(".nav nav-tab"), "a");
        })

        .then(function () {

        })

        .then(function () {

        })
        .run(function () {
            test.done();
        });
});