(function (database) {

    //mongod - dbpath./data - rest
    //ports to check your db http://localhost:27017 or http://localhost:28017
    //need to have mongo db running while trying to read data from data base
    var mongodb = require("mongodb");
    var mongoUrl = "mongodb://localhost:27017/theBoard"; //theBoard will be database name.
    var theDb = null;

    database.getDb = function (next) {
        if (!theDb) {
            //connect to db
            mongodb.MongoClient.connect(mongoUrl, function (err, db) {
                if (err) {
                    next(err, null);
                } else {
                    theDb = {
                        db: db,
                        notes: db.collection("notes")
                    };
                    next(null, theDb);
                }

            });
        } else {
            next(null, theDb);
        }
    }

})(module.exports);