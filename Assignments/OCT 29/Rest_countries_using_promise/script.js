var card_deck=document.createElement("div")
card_deck.setAttribute("class","card-deck")
card_deck.style.marginTop="10px";

// creating a function that sends the request using promise
function makeRequest(method,url){
    return new Promise(function(resolve,reject){
        var req=new XMLHttpRequest();
        req.open(method,url);
        req.send();
        req.onload=function(){
            if(req.status===200){
                resolve(JSON.parse(this.response))
            }else{
                reject({meaasge:req.statusText})
            }
        }
    })
}

makeRequest("GET","https://restcountries.eu/rest/v2/all")
.then(function(result){
    for (var i in result){
        // each time when for loop runs a column is created
        var column=document.createElement("div")
        column.setAttribute("class","col-sm-4")
        // creating the card
        var card=document.createElement("div")
        card.setAttribute("class","card mb-2")
        // card.style.width="330px";
        // displaying the country name
        var title=document.createElement("h5")
        title.setAttribute("class","card-title")
        title.innerHTML=result[i].name;
        title.style.textAlign="center";
        title.style.marginTop="10px";
        // card body
        var card_body=document.createElement("div")
        card_body.setAttribute("class","card-body")
        // flag image 
        var image=document.createElement("img")
        image.src=result[i].flag;
        image.setAttribute("class","card-img-top")
        // contents
        var table=document.createElement("table")
        table.style.height="150px";
        
        var body=document.createElement("tbody")
        var row1=document.createElement("tr")
        // country capital
        var data1=document.createElement("td")
        data1.innerHTML="Capital :"+result[i].capital;
        // lat and long of country
        var data2=document.createElement("td")
        data2.innerHTML="LatLong :"+result[i].latlng;
        var row2=document.createElement("tr")
        // region
        var data3=document.createElement("td")
        data3.innerHTML= "Region :"+result[i].region;
        // currency code
        var data4=document.createElement("td")
        data4.innerHTML="Currency_code:"+result[i].currencies[0].code;
        var row3=document.createElement("tr")
        // currency name
        var data5=document.createElement("td")
        data5.innerHTML="Currency_name :"+result[i].currencies[0].name;
        // symbol of currency
        var data6=document.createElement("td")
        data6.innerHTML="Currency_Symbol :"+result[i].currencies[0].symbol;
        // appending
        row3.append(data5,data6)
        row2.append(data3,data4)
        row1.append(data1,data2)
        body.append(row1,row2,row3)
        table.append(body)
        card_body.append(image,table)
        card.append(title,card_body)
        column.append(card)
        card_deck.append(column)
        
    }
    
     
})

document.body.append(card_deck)




