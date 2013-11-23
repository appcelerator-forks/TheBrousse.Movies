var IS_FAVOURITE = false;

exports.setTitle = function(title){
	$.title.text = title;
};

exports.setSynopsis = function(synopsis){
	$.synopsis.text = (synopsis !== '') ? synopsis : 'There is no synopsis available for this movie.';
};

exports.setThumbnail = function(url){
	$.thumbnail.image = url;
};

exports.setFavourite = function(fav){
	IS_FAVOURITE = fav;
};

exports.setMovie = function(movie){
	$.getView()._data = movie;
};
