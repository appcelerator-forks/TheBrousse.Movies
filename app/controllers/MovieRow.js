exports.setTitle = function(title){
	$.title.text = title;
};
exports.setSynopsis = function(synopsis){
	$.synopsis.text = (synopsis !== '') ? synopsis : 'There is no synopsis available for this movie.';
};
