var container=document.createElement("div")
container.setAttribute("class","container")

var row=document.createElement("div")
row.setAttribute("class","row")

var col1=document.createElement("div")
col1.setAttribute("class","col-sm-3")

var col2=document.createElement("div")
col2.setAttribute("class","col-sm-6")

var col3=document.createElement("div")
col3.setAttribute("class","col-sm-3")

var cover=document.createElement("div")
cover.setAttribute("class","input-group input-group-lg")

var input=document.createElement("input")
input.setAttribute("type","text")
input.setAttribute("class","form-control")
input.setAttribute("aria-label","Sizing example input")
input.setAttribute("aria-describedby","inputGroup-sizing-lg")
input.setAttribute("placeholder","Enter in mm-dd-yyyy format")
input.id="inp";

var button=document.createElement("button")
button.setAttribute("class","btn btn-primary")
button.innerHTML="Click Me !"


button.addEventListener("click",date_manipulator)
function date_manipulator(){
    var input_date=document.getElementById("inp").value;
    var birthdate=Date.parse(input_date);
    var present_date=Date.now();
    if(birthdate<present_date);
    {
        var millseconds=present_date-birthdate;
        var seconds=Math.floor(millseconds/1000);
        var minutes=Math.floor(seconds/60);
        var hours=Math.floor(minutes/60);
        var day=Math.floor(hours/24);
        var month=Math.floor(day/30);
        var year=Math.floor(day/365);
    }
    var diff="Years :"+year+"<br>Months :"+month+"<br>days :"+day+"<br>Hours : "+hours+"<br>Minutes : "+minutes +"<br>Seconds : "+seconds + "<br>Milliseconds :"+ millseconds;
    document.getElementById("output").innerHTML=diff;
}

var p=document.createElement("p")
p.id="output"

cover.append(input)
col2.append(cover)
row.append(col1,col2,col3)
container.append(row,button,p)
document.body.append(container)