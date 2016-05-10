(function (data) {

    //injecting dependency for all controller
    var seedData = require("./seedData");

    data.getNoteCategories = function(next) {
        next(null, seedData.initialNotes);
    };
})(module.exports);