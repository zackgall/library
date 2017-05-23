var express = require('express');
var mongodb = require('mongodb').MongoClient;
var bookRouter = express.Router();


var router = function(nav) {

        bookRouter.route('/')
            .get(function(req, res) {
                    var url =
                        'mongodb://admin:password@ds149431.mlab.com:49431/library-app';
                    mongodb.connect(url, function(err, db) {

                        }

                        res.render('bookListView', {
                            title: 'Books',
                            nav: nav,
                            books: books

                        });
                    });

                bookRouter.route('/:id')
                .get(function(req, res) {
                    var id = req.params.id;
                    res.render('bookView', {
                        title: 'Books',
                        nav: nav,
                        book: books[id]

                    });
                });
                return bookRouter;
            };

        module.exports = router;
