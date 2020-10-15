//creating an instance of XMLHttpRequest
var req=new XMLHttpRequest();
//opening a request
req.open("GET","https://restcountries.eu/rest/v2/all",true)
//sending it
req.send()
//using onload to handle the data after loading it
req.onload=function(){
    //parsing it to an object since the response is received as a string
    var data=JSON.parse(this.response)
    //Applying filter condition to the data to extract the countries with population < 2 lakhs.
    var less_populated_countries=data.filter((country)=>{
        return country["population"]<200000
    })
    console.log(less_populated_countries)

}