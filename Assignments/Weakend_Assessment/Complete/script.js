var container=document.createElement("div")
container.setAttribute("class","container")

var row=document.createElement("div")
row.setAttribute("class","row")

var col1=document.createElement("div")
col1.setAttribute("class","col-sm-2")


var col2=document.createElement("div")
col2.setAttribute("class","col-sm-8")
var card1=document.createElement("div")
card1.setAttribute("class","card")
var card_body1=document.createElement("div")
card_body1.setAttribute("class","card-body")

var text1=document.createElement("p")
text1.setAttribute("class","card-text")
text1.innerHTML="To view user registration web page using HTML Forms"
var button1=document.createElement("a")
button1.setAttribute("href","https://user-registration-forms.netlify.app/")
button1.setAttribute("class","btn btn-primary")
button1.innerHTML="Click here"
var text2=document.createElement("p")
text2.setAttribute("class","card-text")
text2.innerHTML="To view Landing page using HTML and CSS "
var button2=document.createElement("a")
button2.setAttribute("href","https://landing-page-gomathi.netlify.app/")
button2.setAttribute("class","btn btn-primary")
button2.innerHTML="Click here"
var text3=document.createElement("p")
text3.setAttribute("class","card-text")
text3.innerHTML="To view the products in 3x3 grid "
var button3=document.createElement("a")
button3.setAttribute("href","https://product-image.netlify.app/")
button3.setAttribute("class","btn btn-primary")
button3.innerHTML="Click here"




var col3=document.createElement("div")
col3.setAttribute("class","col-sm-2")




card_body1.append(text1,button1,text2,button2,text3,button3)
card1.append(card_body1)
col2.append(card1)
row.append(col1,col2,col3)
container.append(row)
document.body.append(container)

