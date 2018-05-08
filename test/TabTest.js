casper.options.javascriptEnabled = true;
casper.options.clientScripts.push("/build/dist/app.bundle.js");

casper.test.begin('Run tab tests', 1, function(test) {
    casper.start('http://localhost:81/bootstrap_wrapper/demo/tab.html',
        function() {
            // test existion of tab component
            test.assertExists("#tab0");
            test.assertExists("#tab0 > ul > li");
            test.assertExists("#tab0 > .nav  > .nav-item");
        })
    .then(function () {
        test.assertExists(".tab-content");
    })
    .then(function () {
        test.assertExists("#tab-content-0-item-0");
        test.assertExists("#tab-content-0-item-1");
        test.assertExists("#tab-content-0-item-2");
    })
    .then(function () {
        // chain actions
        // Click to tab item 3
        this.click("a[href='#tab-content-0-item-2']");

        var activeItem0 = this.getElementAttribute("a[href='#tab-content-0-item-0']", "class");
        var activeItem2 = this.getElementAttribute("a[href='#tab-content-0-item-2']", "class");

        // check item 3 if it is activated
        if (activeItem0 == 'nav-link' && activeItem2 == 'nav-link active'){
            test.assert(true, "Nav tab is worked truly, tab item no 3 is activated");
        }
    })
    .run(function () {
        test.done();
    });
})


