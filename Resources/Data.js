function Data() {
    this.TIMEOUT = 5e3;
    this.API_KEY = "fuvfpegjuuqtrdj5wm6sg2x5";
    this.BASE_URL = "http://api.rottentomatoes.com/api/public/v1.0/";
}

Data.prototype.makeHTTPRequest = function(url, callback) {
    var client = Ti.Network.createHTTPClient({
        onload: function() {
            Ti.API.info("Received text: " + this.responseText);
            callback(true, JSON.parse(this.responseText));
        },
        onerror: function(e) {
            Ti.API.debug(e.error);
            callback(false, null);
        },
        timeout: this.TIMEOUT
    });
    client.open("GET", url);
    client.send();
};

Data.prototype.fetchMovies = function(query, callback) {
    var url = this.BASE_URL + "movies.json?apikey=" + this.API_KEY + "&q=" + query;
    this.makeHTTPRequest(url, function(success, response) {
        callback(success, response);
    });
};

exports.Data = Data;