// getting score from local storage
var total = localStorage.getItem("score")
console.log(total)

// displaying scores
var h1 = document.createElement("h1")
h1.style.color = "blue";
h1.innerHTML = total;
h1.style.textAlign = "center";
h1.style.marginTop = "100px";

// input box for getting the name
var input_box = document.createElement("input")
input_box.setAttribute("type", "text")
input_box.setAttribute("class", "input")
input_box.style.borderColor = "blue";
input_box.setAttribute("placeholder","Enter your name");
input_box.style.margin = "30px 550px";
input_box.style.width = "275px";

var save_container=document.createElement("div")
var save = document.createElement("a")
save.setAttribute("class", "btn btn-primary")
save.setAttribute("role","button")
save.innerHTML = "Save";
save.setAttribute("href", "high_scores.html")
save.addEventListener("click", function () {
    // storing the name of the person in local storage
    var input_val = input_box.value;
    localStorage.setItem("Name", input_val)
})
save_container.append(save)
save_container.setAttribute("class", "att")

// play again link
var play_container = document.createElement("div")
var play_again = document.createElement("a")
play_again.setAttribute("class", "btn btn-primary")
play_again.setAttribute("role","button")
play_again.innerHTML = "Play Again";
play_again.setAttribute("href", "game.html")
play_container.append(play_again)
play_container.setAttribute("class", "att")

// go home link
var go_home_container = document.createElement("div")
var go_home = document.createElement("a")
go_home.setAttribute("class", "btn btn-primary")
go_home.setAttribute("role","button")
go_home.innerHTML = "Go home";
go_home.setAttribute("href", "index.html")
go_home_container.setAttribute("class", "att")
go_home_container.append(go_home)


// appending 
document.body.append(h1, input_box, save_container, play_container,go_home_container)
