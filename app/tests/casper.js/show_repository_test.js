casper.test.comment('Clicking on a repository shows repository page');

casper.start('http://localhost:9292/#/pangratz');

// change this to check for availability of repository which shall be shown
casper.waitFor(function check() {
    return this.evaluate(function() {
        var username = __utils__.findOne('a.repository').innerText;
        return username !== '';
    });
},
function then() {
    this.click('a.repository');
});
casper.then(function() {
    this.test.assertEquals(this.getCurrentUrl(), 'http://localhost:9292/#/apache/couchdb', 'routes to clicked repository');
});

casper.run(function() {
    this.test.done();
});