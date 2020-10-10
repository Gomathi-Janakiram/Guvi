var req=new XMLHttpRequest()
req.open("GET","https://restcountries.eu/rest/v2/all",true)
req.send()
var data;
req.onload=function(){
    data=JSON.parse(this.response)
    for(var i=0;i<data.length;i++){
        console.log(data[i]["name"]+":"+data[i]["flag"])
    }
}
