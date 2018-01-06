// Array to hold some default names which will be used to 
var heroArray = ["Batman", "Nick Fury", "Spider-Man", "Wonder Woman", "Donatello"];
var apiKey = lUF9860zUXEgSmf3JfJZ5EIGOin9lvdX;

/* 
use to check the queries
https://developers.giphy.com/explorer/ 
*/

// In this case, the "this" keyword refers to the button that was clicked
var searchEntry = $(this).attr("iEntryInput");

// Constructing a URL to search gif for the name of the person who said the quote.
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchEntry + "&api_key=" + apiKey + "&limit=10";


/*The following lines will handle creating the button which will be used.*/
//This simply throws an alert to test that it works.
function alertHeroAdded() {
    var heroName = $(this).attr("data-name");
    alert(heroName);
}
//display the required information.
function buttonCreation() {
    //this is going to delete the current infomration shown.
    $("#iNewGifBtnZone").empty();

    //start picking over the hero array and grab the index of where it's at.
    for (var i = 0; i < heroArray.length; i++) {

        var a = $("<button>");
        a.addClass("cTestButton");
        a.attr("data-name", heroArray[i]);
        a.text(heroArray[i]);
        $("#iNewGifBtnZone").append(a);
    }
}
$("#iAddEntry").on("click", function(event) {
    /*when this button is clicked it will add the text into the array
    and create a button. */
    event.preventDefault();
    var cTestButton = $("#iInpEntry").val().trim();
    heroArray.push(cTestButton);
    buttonCreation();
});

$(document).on("click", ".cTestButton", alertHeroAdded); //when the button is clicked throw an alert - this will need to be changed to pull up the gifs.
buttonCreation();

//AJAX call to get the information for the search to the GIF API
$.ajax({
    url: queryURL,
    method: "GET"
})




/* When the user selects one of the buttons in the list 
display the gif tied to it. */