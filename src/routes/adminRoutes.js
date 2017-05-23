var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
    var books = [{
        title: 'Title1',
        author: 'Author1'
    }, {
        title: 'Title2',
        author: 'Author2'
    }];


var router = function(nav) {

    adminRouter.route('/addBooks')
        .get(function(req, res) {
            var url =
                'mongodb://admin:password@ds149431.mlab.com:49431/library-app';
            mongodb.connect(url, function(err, db) {
                var collection = db.collection('books');
                collection.insertMany(books,
                    function(err, results) {
                        res.send(results);
                        db.close();
                    });
            });

           //n res.send('inserting books');
        });

    return adminRouter;
}

module.exports = router;
