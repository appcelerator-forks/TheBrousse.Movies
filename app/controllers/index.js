var DataModule = require('Data');
var dataModule = new DataModule.Data();

/*
 * fetch the movies matching "Les Bronzes"
 */
dataModule.fetchMovies('batman', function(success, response){
	if(success){
		
		debugger;
		Ti.API.info(response);
		
		var rows = [];
		var alternativeRow = false;
		
		for(var i = 0; i < response.movies.length; i++){
			var row = Alloy.createController('MovieRow');
			
			row.Wrapper.setBackgroundColor(alternativeRow ? Alloy.Globals.lightColor2 : Alloy.Globals.lightColor);
			row.setTitle(response.movies[i].title);
			row.setSynopsis(response.movies[i].synopsis);
			rows.push(row.getView()); //id, title, runtime, ratings, posters, year, synopsis
			
			alternativeRow = (alternativeRow) ? false : true;
		}
		
		//set the array of rows to the table view
		$.tblMovies.setData(rows);
	
	}
	else {
		Ti.UI.createAlertDialog({
			title: 'Oh no!',
			message: 'Your request failed.'
		}).show();
	}
});

$.window1.titleControl= Ti.UI.createLabel({ 
 	color: '#fff', 
	width: Ti.UI.SIZE,
	text: 'Latest Movies',
	font: {
		fontWeight: 'bold'
	}
});

$.tabs.open();