var openHeroArr = ["Batman", "Nick Fury", "Spider-Man", "Wonder Woman", "Donatello"];
var apiKey = lUF9860zUXEgSmf3JfJZ5EIGOin9lvdX;

/* 
use to check the queries
https://developers.giphy.com/explorer/ 
*/

// In this case, the "this" keyword refers to the button that was clicked
var searchEntry = $(this).attr("iEntryInput");

// Constructing a URL to search Giphy for the name of the person who said the quote
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchEntry + 
"&api_key=" + apiKey + "&limit=10";

function alertHeroAdded() {
	var heroname = $(this).attr()
}

// Render a button into the current display list.
function createButton(){
	
	/* remove the current list and relaod the information to the page so there are
	no repeats in the page when a new one is created */
	
	//
	$("#iNewGify").empty();

	for (var i = 0; i < openHeroArr.length; i++) {
		var a = $("<button>");
		a.addClass ("hero");
		a.attr("TBDName", movies[i]);
		a.text(movies[i]);
		$("#iNewGify").append(a);
	}
}

$("#iAddEntry").on("click", function(event) {
	event.preventDefault();

	var hero = $("#iInpEntry").val().trim();

	openHeroArr.push(hero);

	createButton();
});

$(document).on("click", ".hero", )

// When the user selects one of the buttons in the list display the gif tied to it.

