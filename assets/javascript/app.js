$(document).ready(function() {
    // Array to hold some default names which will be used to 
    var heroArray = ["Batman", "Nick Fury", "Spider-Man", "Father", "Mother", "Wonder Woman", "Donatello"];
    var apiKey = "lUF9860zUXEgSmf3JfJZ5EIGOin9lvdX";

    /* use to check the queries https://developers.giphy.com/explorer/ */

    /*The following lines will handle creating the button which will be used.
    This simply throws an alert to test that it works. */
    // function alertHeroAdded() {
    //     var heroName = $(this).attr("data-name");
    //     alert(heroName);
    // }

    //display the required information.
    function buttonCreation() {
        //this is going to delete the current infomration shown.
        $("#iNewGifBtnZone").empty();

        //start picking over the hero array and grab the index of where it's at.
        for (var i = 0; i < heroArray.length; i++) {
            var a = $("<button>"); // create a button which will store the info
            a.addClass("cTestButton"); //give the button a class.
            a.attr("data-name", heroArray[i]); //this attr will be used to pull down the hero name for the gif
            a.text(heroArray[i]); //set the text to the point in the array
            $("#iNewGifBtnZone").append(a); //add the button to the list.
        }
    }
    $("#iAddEntry").on("click", function(event) {
        /*when this button is clicked it will add the text into the array
        and create a button. */
        event.preventDefault();
        var cTestButton = $("#iInpEntry").val().trim();
        heroArray.push(cTestButton);
        $("#iInpEntry").val("");
        buttonCreation();
    });

    /* When the button is clicked run the code to pull up the
    gif according to the button's attr. */
    $(".cButtonContainer").on("click", ".cTestButton", pullGifImg);
    buttonCreation();

    function pullGifImg() {
        /*Here is where the code for the gif's will go: */
        // In this case, the "this" keyword refers to the button that was clicked
        var searchEntry = $(this).attr("data-name");

        // Constructing a URL to search gif for the name of the person who said the quote.
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchEntry + "&api_key=" + apiKey + "&limit=10";

        //AJAX call to get the information for the search to the GIF API
        $.ajax({
            url: queryURL,
            method: "GET"
        })

        .done(function(response) {
            var results = response.data; //variable to handle the results of the call.

            //walk over the results and pull the info apart then build the gif's as needed.
            for (var i = 0; i < results.length; i++) {
                if (results[i].rating !== "r" && results[i].rating !== "pg-13") { //insure that we don't get rated r or ph-13.
                    var gifDiv = $("<button class='item'>");

                    var rating = results[i].rating; //press the ratings into a varaible.

                    var p = $("<p>").text("Rating: " + rating); //built a string with the information for the button.

                    var gifImage = $("<img>"); //create a new variable which will be an image.

                    gifImage.attr("src", results[i].images.fixed_height_still.url);

                    gifImage.attr("data-state", "still");

                    gifImage.attr("data-still", results[i].images.fixed_height_still.url);

                    gifImage.attr("data-animate", results[i].images.fixed_height.url);

                    gifDiv.append(p); //tack the gif on to the list of gif's.
                    gifDiv.append(gifImage);

                    $("#gifsGoHere").prepend(gifDiv); //push the gif's into the desired area.
                }
            }

            //Set up a function which will handle the start/stop ability of the gif's.
            $("img").on("click", function() {

                var state = $(this).attr("data-state");

                if (state === "still") {
                    $(this).attr("src", $(this).attr("data-animate"));
                    $(this).attr("data-state", "animate");
                } else {
                    $(this).attr("src", $(this).attr("data-still"));
                    $(this).attr("data-state", "still");
                }
            });
        })
    }
});