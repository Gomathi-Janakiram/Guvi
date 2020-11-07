// container
var container=document.createElement("div")
container.setAttribute("class","container col-sm-12")

var row=document.createElement("div")
row.setAttribute("class","row")
// empty left side
var left=document.createElement("div")
left.setAttribute("class","col-sm-2")
// play button and high scores button
var middle=document.createElement("div")
middle.setAttribute("class","col-sm-8")
middle.setAttribute("id","center")
var heading=document.createElement("h1")
heading.innerHTML="Quick Quiz"
var play_btn=document.createElement("a")
play_btn.setAttribute("class","btn btn-primary")
play_btn.setAttribute("href","game.html")
play_btn.setAttribute("role","button")
play_btn.innerHTML="PLAY"
var br=document.createElement("br")
var score_btn=document.createElement("a")
score_btn.setAttribute("class","btn btn-primary")
score_btn.setAttribute("href","high_scores.html")
score_btn.setAttribute("role","button")
score_btn.innerHTML="HIGH SCORES"
// empty right side
var right=document.createElement("div")
right.setAttribute("class","col-sm-2")

// appending everythin
middle.append(heading,play_btn,score_btn,br)
row.append(left,middle,right)
container.append(row)
document.body.append(container)