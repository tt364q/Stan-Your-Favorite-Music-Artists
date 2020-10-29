function handleGetData(event) {
    event.preventDefault();
// load in value of the search textbox
    const searchText =$("#search").val()
    const response = $.ajax({
        url: `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${searchText}`
    })

    response.then(
        (data) => {
            console.log(data);
            $("#strArtist").text(data.artists[0].strArtist)
            $("#intFormedYear").text(data.artists[0].intFormedYear)
            // $("strGenre").text(data.artists[0].strGenre)
            $("#strBiographyEN").text(data.artists[0].strBiographyEN)
        },
        (error) => {
            console.log("bad request: ", error)
        }

    )
}

$('form').on("submit", handleGetData)