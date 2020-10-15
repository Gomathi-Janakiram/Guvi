

//Error handling in XMLHttp request
try{
    var req=new XMLHttpRequest();
    re.open("GET","https://restcountries.eu/rest/v2/all",true)  // written re instead of req.So it does not execute and goes to catch block.
    req.send()
    req.onload=function(){
        var data=JSON.parse(this.response)
        console.log(data)
    }
}
catch(error){
    alert("An Error Found : "+error.message)
}
