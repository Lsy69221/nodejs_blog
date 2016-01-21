
var express = require('express'),
	// utility = require('utility');
	superagent = require('superagent'),
	cheerio = require('cheerio');

var app = express();

app.get('/', function (req, res, next) {
    // var q = req.query.q;

    // var md5Value = utility.md5(q);

    // res.send(md5Value);

    superagent.get('https://cnodejs.org/').end(function (err, sres) {
        if(err) {
        	return next(err);
        }
        var $ = cheerio.load(sres.text);
        var items = [];

	    $('#topic_list .topic_title').each(function (idx, element) {
	        var $element = $(element);
	        items.push({
	          title: $element.attr('title'),
	          href: $element.attr('href')
	        });
	    });

        res.send(items);
    });

});

app.listen(3000, function (req, res) {
    console.log('app is running at port 3000');
})

;