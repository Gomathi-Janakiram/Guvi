
//Print the Name,Capital and Flag for all the countries using forEach function

//creating an instance of XMLHttpRequest
var req = new XMLHttpRequest();
//opening a request
req.open('GET', 'https://restcountries.eu/rest/v2/all', true);
//sending it
req.send()
//using onload to handle the data after loading it
req.onload = function () {
    //parsing it to an object since the response is received as a string
    var data = JSON.parse(this.response);
    //Applying forEach to the data to extract name,capital and flag url for all the countries.
    var country_det=data.forEach((country)=>{
        console.log("name :" +country["name"]+ "," +"capital :" + country["capital"] + "," + "flag :" + country["flag"])
    })
    console.log(country_det)
}