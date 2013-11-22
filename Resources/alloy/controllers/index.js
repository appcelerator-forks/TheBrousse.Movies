function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.tabs = Ti.UI.createTabGroup({
        tabsBackgroundColor: Alloy.Globals.blockColor,
        tabHeight: 60,
        tabsTintColor: Alloy.Globals.highlightColor,
        id: "tabs"
    });
    $.__views.window1 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        barColor: Alloy.Globals.blockColor,
        tintColor: Alloy.Globals.highlightColor,
        statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,
        id: "window1"
    });
    $.__views.tableWrapper = Ti.UI.createView({
        id: "tableWrapper"
    });
    $.__views.window1.add($.__views.tableWrapper);
    $.__views.tblMovies = Ti.UI.createTableView({
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        left: 0,
        right: 0,
        backgroundColor: Alloy.Globals.backgroundColor,
        separatorStyle: 0,
        id: "tblMovies"
    });
    $.__views.tableWrapper.add($.__views.tblMovies);
    $.__views.__alloyId0 = Ti.UI.createTab({
        window: $.__views.window1,
        title: "Movies",
        icon: "images/reviews.png",
        id: "__alloyId0"
    });
    $.__views.tabs.addTab($.__views.__alloyId0);
    $.__views.__alloyId2 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        barColor: Alloy.Globals.blockColor,
        tintColor: Alloy.Globals.highlightColor,
        statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,
        title: "My Favourites",
        id: "__alloyId2"
    });
    $.__views.__alloyId3 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "I am Window 2",
        id: "__alloyId3"
    });
    $.__views.__alloyId2.add($.__views.__alloyId3);
    $.__views.__alloyId1 = Ti.UI.createTab({
        window: $.__views.__alloyId2,
        title: "Favourites",
        icon: "images/heart2.png",
        id: "__alloyId1"
    });
    $.__views.tabs.addTab($.__views.__alloyId1);
    $.__views.tabs && $.addTopLevelView($.__views.tabs);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var DataModule = require("Data");
    var dataModule = new DataModule.Data();
    dataModule.fetchMovies("batman", function(success, response) {
        if (success) {
            debugger;
            Ti.API.info(response);
            var rows = [];
            var alternativeRow = false;
            for (var i = 0; response.movies.length > i; i++) {
                var row = Alloy.createController("MovieRow");
                row.Wrapper.setBackgroundColor(alternativeRow ? Alloy.Globals.lightColor2 : Alloy.Globals.lightColor);
                row.setTitle(response.movies[i].title);
                row.setSynopsis(response.movies[i].synopsis);
                rows.push(row.getView());
                alternativeRow = alternativeRow ? false : true;
            }
            $.tblMovies.setData(rows);
        } else Ti.UI.createAlertDialog({
            title: "Oh no!",
            message: "Your request failed."
        }).show();
    });
    $.window1.titleControl = Ti.UI.createLabel({
        color: "#fff",
        width: Ti.UI.SIZE,
        text: "Latest Movies",
        font: {
            fontWeight: "bold"
        }
    });
    $.tabs.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;