casper.test.comment('Clicking on a user changes route');

casper.start('http://localhost:9292/#/pangratz');

casper.then(function() {
  this.click("a.username");
});

casper.then(function() {
  this.test.assertEquals(this.getCurrentUrl(), 'http://localhost:9292/#/apache', 'routes to clicked user');
})

casper.run(function() { this.test.done(); });