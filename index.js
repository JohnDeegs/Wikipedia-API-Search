//Run JQuery
$(document).ready(function() {

    //When button clicked run code
    $("#search-btn").click(function() {

        //sets variable searchTerm to user input
        var searchTerm = $('#search').val();

        //API with search term in
        var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";

        //Ajax request
        $.ajax({
            type: "GET",
            url: url,
            async: false,
            dataType: "json",
            success: function(data) {

                //Clear the search results before a new search
                $("#headSearch1").html("");

                //loop through json arrays to display results
                for (var i = 0; i < data[1].length; i++) {
                    $("#headSearch1").prepend("<li><a href=" + data[3][i] + ">" + data[1][i] + "</a><p>" + data[2][i] + "</p></li>");
                }
            },
            error: function(errorMessage) {
                alert("Error");
            }

        });

    });
});
