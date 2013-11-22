function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "MovieRow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.Wrapper = Ti.UI.createTableViewRow({
        layout: "horizontal",
        height: 100,
        width: Ti.UI.FILL,
        left: 0,
        right: 0,
        id: "Wrapper"
    });
    $.__views.Wrapper && $.addTopLevelView($.__views.Wrapper);
    $.__views.container = Ti.UI.createView({
        left: 0,
        top: 10,
        right: 0,
        id: "container"
    });
    $.__views.Wrapper.add($.__views.container);
    $.__views.thumbnail = Ti.UI.createImageView({
        width: 100,
        height: 80,
        left: 10,
        top: 0,
        id: "thumbnail",
        image: "/images/thumbnail.jpg"
    });
    $.__views.container.add($.__views.thumbnail);
    $.__views.title = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: 30,
        left: 120,
        top: 0,
        right: 10,
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        color: Alloy.Globals.highlightColor,
        id: "title"
    });
    $.__views.container.add($.__views.title);
    $.__views.synopsis = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: 50,
        left: 120,
        right: 10,
        top: 30,
        font: {
            fontSize: 12
        },
        color: Alloy.Globals.highlightColor2,
        id: "synopsis"
    });
    $.__views.container.add($.__views.synopsis);
    exports.destroy = function() {};
    _.extend($, $.__views);
    exports.setTitle = function(title) {
        $.title.text = title;
    };
    exports.setSynopsis = function(synopsis) {
        $.synopsis.text = "" !== synopsis ? synopsis : "There is no synopsis available for this movie.";
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;