﻿(function (controllers) {

    //injecting dependency for all controller
    var homeController = require("./homeController");
    
    controllers.init = function (app) {
        homeController.init(app);
    };
})(module.exports);