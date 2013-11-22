function SQLite(){
	this.db = Ti.Database.open('moviesDB');
	this.executeCommand('CREATE TABLE IF NOT EXISTS favs(id VARCHAR(20,0) PRIMARY KEY, jsonData TEXT);');
};

SQLite.prototype.executeCommand = function(query){
	this.db.open();
	var results = this.db.execute(query);
	this.db.close();
	return results;
};

SQLite.getFavourites = function(){
	return this.executeCommand("SELECT * FROM favs");
};

SQLite.deleteFavourite = function(id){
	this.executeCommand("DELETE FROM favs WHERE id = '" + id + "'");
};

SQLite.addFavourite = function(id, jsonData){
	var jsonString = JSON.stringify(jsonData);
	this.executeCommand("INSERT INTO favs (id, jsonData) VALUES ('" + id + "', '" + jsonData + "'");
};

exports.SQLite = SQLite;