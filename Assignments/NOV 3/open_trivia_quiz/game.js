// url of open trivia quiz
var url = "https://opentdb.com/api.php?amount=1&type=multiple";


var container = document.createElement("div")
container.setAttribute("class", "container col-sm-12")
container.id = "cont";

// Question progress text
var header = document.createElement("header")
header.setAttribute("class", "head")
var div1 = document.createElement("div")
div1.setAttribute("class", "question-container")
var question_head = document.createElement("h3")
question_head.innerHTML = "Question";
var progress_bar = document.createElement("h4")
progress_bar.setAttribute("id", "progress")
progress_bar.innerHTML = 1;

// score 
var div2 = document.createElement("div")
div2.setAttribute("id", "score-container")
var score_head = document.createElement("h3")
score_head.innerHTML = "Score";
score_head.setAttribute("class", "score")
score_head.setAttribute("id", "score_head")
var marks = document.createElement("h5")
marks.innerHTML = 0;
marks.setAttribute("class", "score")
marks.setAttribute("id", "marks")

var count = 0;

// function to make request
async function makeRequest(a) {
    count += 1;

    var req = await fetch(a)
    var parsed_req = await req.json();
    var result = parsed_req["results"]
    var cont = document.getElementById("cont")
    cont.innerHTML = ""
    console.log(parsed_req)

    for (var i in result) {
        // gettting required info
        var question = result[i].question;
        var answers = result[i].incorrect_answers;
        var correct_ans = result[i].correct_answer;
        answers.push(correct_ans);
        console.log(answers, correct_ans)


        var row = document.createElement("div")
        row.setAttribute("class", "row")

        var left = document.createElement("div")
        left.setAttribute("class", "col-sm-3")

        var middle = document.createElement("div")
        middle.setAttribute("class", "col-sm-6")
        middle.setAttribute("id", "center")

        var right = document.createElement("div")
        right.setAttribute("class", "col-sm-3")
        // question
        var quest = document.createElement("h2")
        quest.innerHTML = question;
        // option1
        var choice_cont1 = document.createElement("div")
        choice_cont1.setAttribute("class", "choice-container")
        choice_cont1.addEventListener("click", async function () {
            var mrks_1 = document.getElementById("marks");
            var val_1 = parseInt(mrks_1.innerHTML);
            mrks_1.innerHTML = val_1 + 0;
            choice_cont1.style.backgroundColor = "red";
            choice1.style.backgroundColor = "red"
            choice_text1.style.color = "white";
            // storing in local storage
            localStorage.setItem("score",mrks_1.innerHTML)
            console.log(localStorage.getItem("score"))
            if (count === 10) {
                var inner_cont = document.getElementById("cont")
                inner_cont.innerHTML = "";
                inner_cont.innerHTML = `<h1>GAME OVER</h1>`
                inner_cont.setAttribute("id","align")
                inner_cont.style.textAlign="center";
                inner_cont.style.marginTop="200px";
                var link1=document.createElement("a")
                link1.setAttribute("class","btn btn-primary")
                link1.setAttribute("href","end.html")
                link1.setAttribute("role","button")
                link1.style.marginLeft="20px";
                link1.style.marginTop="40px";
                link1.innerHTML="See your Scores";
                inner_cont.append(link1)
            } else {
                await makeRequest(url);
            }
            var quest_no = document.getElementById("progress");
            quest_no.innerHTML = count;
        })
        var choice1 = document.createElement("p")
        choice1.setAttribute("class", "choice")
        choice1.innerHTML = "A";
        var choice_text1 = document.createElement("p")
        choice_text1.setAttribute("class", "choice-text")
        choice_text1.innerHTML = answers[0];

        // option 2
        var choice_cont2 = document.createElement("div")
        choice_cont2.setAttribute("class", "choice-container")
        choice_cont2.addEventListener("click", async function () {
            var mrks_1 = document.getElementById("marks");
            var val_1 = parseInt(mrks_1.innerHTML);
            mrks_1.innerHTML = val_1 + 0;
            choice_cont2.style.backgroundColor = "red";
            choice2.style.backgroundColor = "red"
            choice_text2.style.color = "white";
            // local storage
            localStorage.setItem("score",mrks_1.innerHTML)
            console.log(localStorage.getItem("score"))

            if (count === 10) {
                var inner_cont = document.getElementById("cont")
                inner_cont.innerHTML = "";
                inner_cont.innerHTML = `<h1>GAME OVER</h1>`
                inner_cont.setAttribute("id","align")
                inner_cont.style.textAlign="center";
                inner_cont.style.marginTop="200px";
                var link1=document.createElement("a")
                link1.setAttribute("class","btn btn-primary")
                link1.setAttribute("href","end.html")
                link1.setAttribute("role","button")
                link1.style.marginLeft="20px";
                link1.style.marginTop="40px";
                link1.innerHTML="See your Scores";
                inner_cont.append(link1)
            } else {
                await makeRequest(url);
            }
            var quest_no = document.getElementById("progress");
            quest_no.innerHTML = count;
        })
        var choice2 = document.createElement("p")
        choice2.setAttribute("class", "choice")
        choice2.innerHTML = "B";
        var choice_text2 = document.createElement("p")
        choice_text2.setAttribute("class", "choice-text")
        choice_text2.innerHTML = answers[1];
        // option 3
        var choice_cont3 = document.createElement("div")
        choice_cont3.setAttribute("class", "choice-container")
        choice_cont3.addEventListener("click", async function () {
            var mrks_1 = document.getElementById("marks");
            var val_1 = parseInt(mrks_1.innerHTML);
            mrks_1.innerHTML = val_1 + 0;
            choice_cont3.style.backgroundColor = "red";
            choice3.style.backgroundColor = "red"
            choice_text3.style.color = "white";
            // local storage
            localStorage.setItem("score",mrks_1.innerHTML)
            console.log(localStorage.getItem("score"))
            if (count === 10) {
                var inner_cont = document.getElementById("cont")
                inner_cont.innerHTML = "";
                inner_cont.innerHTML = `<h1>GAME OVER</h1>`
                inner_cont.setAttribute("id","align")
                inner_cont.style.textAlign="center";
                inner_cont.style.marginTop="200px";
                var link1=document.createElement("a")
                link1.setAttribute("class","btn btn-primary")
                link1.setAttribute("href","end.html")
                link1.setAttribute("role","button")
                link1.style.marginLeft="20px";
                link1.style.marginTop="40px";
                link1.innerHTML="See your Scores";
                inner_cont.append(link1)
            } else {
                await makeRequest(url);
            }
            var quest_no = document.getElementById("progress");
            quest_no.innerHTML = count;
        })
        var choice3 = document.createElement("p")
        choice3.setAttribute("class", "choice")
        choice3.innerHTML = "C";
        var choice_text3 = document.createElement("p")
        choice_text3.setAttribute("class", "choice-text")
        choice_text3.innerHTML = answers[2];
        // option 4
        var choice_cont4 = document.createElement("div")
        choice_cont4.setAttribute("class", "choice-container")
        choice_cont4.addEventListener("click", async function () {
            choice_cont4.style.backgroundColor = "green";
            choice4.style.backgroundColor = "green"
            choice_text4.style.color = "white";
            var mrks_1 = document.getElementById("marks");
            var val_1 = parseInt(mrks_1.innerHTML);
            mrks_1.innerHTML = val_1 + 10;
            // local storage
            localStorage.setItem("score",mrks_1.innerHTML)
            console.log(localStorage.getItem("score"))

            if (count === 10) {
                var inner_cont = document.getElementById("cont")
                inner_cont.innerHTML = "";
                inner_cont.innerHTML = `<h1>GAME OVER</h1>`
                inner_cont.setAttribute("id","align")
                inner_cont.style.textAlign="center";
                inner_cont.style.marginTop="200px";
                var link1=document.createElement("a")
                link1.setAttribute("class","btn btn-primary")
                link1.setAttribute("href","end.html")
                link1.setAttribute("role","button")
                link1.style.marginLeft="20px";
                link1.style.marginTop="40px";
                link1.innerHTML="See your Scores";
                inner_cont.append(link1)
            } else {
                await makeRequest(url);
            }
            var quest_no = document.getElementById("progress");
            quest_no.innerHTML = count;
        })
        var choice4 = document.createElement("p")
        choice4.setAttribute("class", "choice")
        choice4.innerHTML = "D";
        var choice_text4 = document.createElement("p")
        choice_text4.setAttribute("class", "choice-text")
        choice_text4.innerHTML = answers[3];

        // appending everything
        choice_cont1.append(choice1, choice_text1)
        choice_cont2.append(choice2, choice_text2)
        choice_cont3.append(choice3, choice_text3)
        choice_cont4.append(choice4, choice_text4)
        div2.append(score_head, marks)
        div1.append(question_head, progress_bar)
        header.append(div1, div2)
        middle.append(header, quest, choice_cont1, choice_cont2, choice_cont3, choice_cont4)
        row.append(left, middle, right)
        container.append(row)
    }



}

makeRequest(url)
document.body.append(container)

