var container=document.createElement("div")
container.setAttribute("class","container")

var row=document.createElement("div")
row.setAttribute("class","row")

var col1=document.createElement("div")
col1.setAttribute("class","col-sm-5")
var card1=document.createElement("div")
card1.setAttribute("class","card")
var card_body1=document.createElement("div")
card_body1.setAttribute("class","card-body")
var title1=document.createElement("h2")
title1.setAttribute("class","card-title")
title1.innerHTML="Random Number Generator"
var text1=document.createElement("p")
text1.setAttribute("class","card-text")
text1.innerHTML="Here we generate Unique Eight Digit Random Number"
var button1=document.createElement("a")
button1.setAttribute("href","random.html")
button1.setAttribute("class","btn btn-primary")
button1.innerHTML="Click Me ! "


var col2=document.createElement("div")
col2.setAttribute("class","col-sm-2")

var col3=document.createElement("div")
col3.setAttribute("class","col-sm-5")
var card2=document.createElement("div")
card2.setAttribute("class","card")
var card_body2=document.createElement("div")
card_body2.setAttribute("class","card-body")
var title2=document.createElement("h2")
title2.setAttribute("class","card-title")
title2.innerHTML="Date Manipulation"
var text2=document.createElement("p")
text2.setAttribute("class","card-text")
text2.innerHTML="Here we read the date from the user and manipulate the date."
var button2=document.createElement("a")
button2.setAttribute("href","date.html")
button2.setAttribute("class","btn btn-primary")
button2.innerHTML="Click Me ! "



card_body1.append(title1,text1,button1)
card1.append(card_body1)
col1.append(card1)
card_body2.append(title2,text2,button2)
card2.append(card_body2)
col3.append(card2)
row.append(col1,col2,col3)
container.append(row)
document.body.append(container)

