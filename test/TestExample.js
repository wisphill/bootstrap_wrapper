casper.test.begin('Test DOM', 6, function (test) {
    casper.start("http://uet.vnu.edu.vn/~thanhld/lects/webapp-development/jquery/form.htm", function() {

    })

    .then(function() {
        test.assertExists("form[method=post] > input#masv[type=text]");
        test.assertExists("form[method=post] > span#loi_masv[class=errornote]");
        test.assertExists("form[method=post] > input#btnchapnhan[type=button]")
        test.assertSelectorHasText("form[method=post] > span#loi_masv[class=errornote]", "");
    })
    .then(function(){
        this.click("form[method=post] > input#btnchapnhan[type=button]");
    })

    .then(function() {
        test.assertSelectorHasText("form[method=post] > span#loi_masv[class=errornote]", "Chưa nhập mã.");
    })

    .thenEvaluate(function(){
        document.querySelector("form[method=post] > input#masv[type=text]").setAttribute("value", "Tran Nguyen Han");
    })
    .then(function(){
        this.click("form[method=post] > input#btnchapnhan[type=button]");
    })

    .then(function() {
        test.assertSelectorHasText("form[method=post] > span#loi_masv[class=errornote]", "");
    })

    .run(function() {
        test.done();
    });
});