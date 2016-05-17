(function (data) {

    //injecting dependency for all controller
    var seedData = require("./seedData");
    var database = require("./database");

    data.getNoteCategories = function (next) {
        //next(null, seedData.initialNotes);
        database.getDb(function (err, db) {
            if (err) {
                next(err, null);
            } else {
                db.notes.find().toArray(function(err, results) {
                    if (err) {
                        next(err, null);
                    } else {
                        next(null, results);
                    }
                });
            }
        });
    };

    function seedDatabase() {
        database.getDb(function (err, db) {
            if (err) {
                console.log("Error found while seeding the database : " + err);
            } else {
                //test to see id data exists
                db.notes.count(function (err, count) {
                    if (err) {
                        console.log("fail to retrieve database data" + err);
                    } else {
                        if (count === 0) {
                            console.log("seeding the database");
                            seedData.initialNotes.forEach(function (item) {
                                db.notes.insert(item, function (err) {
                                    if (err) {
                                        console.log("error occur while inserting data to notes database : " + err);
                                    }
                                });
                            });
                        } else {
                            console.log("database is allready filled/seeded");
                        }
                    }
                });
            }
        });
    }

    seedDatabase();

})(module.exports);