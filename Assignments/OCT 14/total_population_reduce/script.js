
//Finding out the total population of all countries using reduce.

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
    //Applying reduce method to the data to find the total population of all the countries.
    var total_population=data.reduce((total,country)=>{
          return total+=country["population"]
    },0) 
    console.log(total_population)
}