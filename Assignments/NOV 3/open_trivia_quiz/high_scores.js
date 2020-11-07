
// getting the name and scores from local storage
var name=localStorage.getItem("Name")
var score=localStorage.getItem("score")

var h1 = document.createElement("h1")
h1.style.color = "blue";
h1.innerHTML = name +":"+score;
h1.style.textAlign = "center";
h1.style.marginTop = "100px";
// go home link
var go_home_container = document.createElement("div")
var go_home = document.createElement("a")
go_home.setAttribute("role","button")
go_home.innerHTML = "Go home";
go_home.setAttribute("href", "index.html")
go_home_container.append(go_home)
go_home_container.setAttribute("class", "att")
go_home_container.style.textAlign="center";
go_home_container.style.marginTop="30px";
go_home_container.style.fontSize="20px"

document.body.append(h1,go_home_container)