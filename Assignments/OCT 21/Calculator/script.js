// Adding the container 
var container=document.createElement("div");
container.setAttribute("class","container");
// Creating a row for the giving the heading 
var row1=document.createElement("div");
row1.setAttribute("class","row");
var empty1=document.createElement("div");
empty1.setAttribute("class","col-sm-12");
empty1.id="top";
var h1=document.createElement("h1")
h1.innerHTML="CALCULATOR";
h1.setAttribute("class","text-center mt-5 mb-5");
// Creating another row with empty spaces at left and right and calculator at the center
var row2=document.createElement("div");
row2.setAttribute("class","row");
var empty2=document.createElement("div");
empty2.setAttribute("class","col-sm-3");
empty2.id="left";
var content=document.createElement("div");
content.setAttribute("class","col-sm-6");
content.id="center";
var empty3=document.createElement("div");
empty3.setAttribute("class","col-sm-3");
empty3.id="right";
//Creating a table 
var table=document.createElement("table");
table.setAttribute("class","table table-bordered table-dark"); 

// first row with input box
var row_one=document.createElement('tr');
var data_1=document.createElement('td');
data_1.setAttribute('colspan',4);
var inp=document.createElement('input');
inp.setAttribute('type','text');
inp.setAttribute("class","form-control")
inp.id="input";
inp.addEventListener("keydown",function(e){
    var code=e.keyCode;
    if (code >= 65 && code <= 90)
    alert("Only numbers are allowed");
})
// second row with numbers and symbols
var row_two=document.createElement("tr");
var data_2=document.createElement("td");
data_2.setAttribute("id","one");
data_2.setAttribute("class","text-center");
data_2.innerHTML=1;
data_2.addEventListener("click",function(){
    document.getElementById("input").value+=data_2.innerHTML;
})
var data_3=document.createElement("td");
data_3.setAttribute("id","two");
data_3.setAttribute("class","text-center");
data_3.innerHTML=2;
data_3.addEventListener("click",function(){
    document.getElementById("input").value+=data_3.innerHTML;
})
var data_4=document.createElement("td");
data_4.setAttribute("id","three");
data_4.setAttribute("class","text-center");
data_4.innerHTML=3;
data_4.addEventListener("click",function(){
    document.getElementById("input").value+=data_4.innerHTML;
})
var data_5=document.createElement("td");
data_5.setAttribute("id","add");
data_5.setAttribute("class","text-center");
data_5.innerHTML="+";
data_5.addEventListener("click",function(){
    document.getElementById("input").value+=data_5.innerHTML;
})

var row_three=document.createElement("tr");
var data_6=document.createElement("td");
data_6.setAttribute("id","four");
data_6.setAttribute("class","text-center");
data_6.innerHTML=4;
data_6.addEventListener("click",function(){
    document.getElementById("input").value+=data_6.innerHTML;
})
var data_7=document.createElement("td");
data_7.setAttribute("id","five");
data_7.setAttribute("class","text-center");
data_7.innerHTML=5;
data_7.addEventListener("click",function(){
    document.getElementById("input").value+=data_7.innerHTML;
})
var data_8=document.createElement("td");
data_8.setAttribute("id","six");
data_8.setAttribute("class","text-center");
data_8.innerHTML=6;
data_8.addEventListener("click",function(){
    document.getElementById("input").value+=data_8.innerHTML;
})
var data_9=document.createElement("td");
data_9.setAttribute("id","sub");
data_9.setAttribute("class","text-center");
data_9.innerHTML="-";
data_9.addEventListener("click",function(){
    document.getElementById("input").value+=data_9.innerHTML;
})

var row_four=document.createElement("tr");
var data_10=document.createElement("td");
data_10.setAttribute("id","seven");
data_10.setAttribute("class","text-center");
data_10.innerHTML=7;
data_10.addEventListener("click",function(){
    document.getElementById("input").value+=data_10.innerHTML;
})
var data_11=document.createElement("td");
data_11.setAttribute("id","eight");
data_11.setAttribute("class","text-center");
data_11.innerHTML=8;
data_11.addEventListener("click",function(){
    document.getElementById("input").value+=data_11.innerHTML;
})
var data_12=document.createElement("td");
data_12.setAttribute("id","nine");
data_12.setAttribute("class","text-center");
data_12.innerHTML=9;
data_12.addEventListener("click",function(){
    document.getElementById("input").value+=data_12.innerHTML;
})
var data_13=document.createElement("td");
data_13.setAttribute("id","mul");
data_13.setAttribute("class","text-center");
data_13.innerHTML="*";
data_13.addEventListener("click",function(){
    document.getElementById("input").value+=data_13.innerHTML;
})

var row_five=document.createElement("tr");
var data_14=document.createElement("td");
data_14.setAttribute("id","c");
data_14.setAttribute("class","text-center");
data_14.innerHTML="C";
data_14.addEventListener("click",function(){
    document.getElementById("input").value="";
})
var data_15=document.createElement("td");
data_15.setAttribute("id","zero");
data_15.setAttribute("class","text-center");
data_15.innerHTML=0;
data_15.addEventListener("click",function(){
    document.getElementById("input").value+=data_15.innerHTML;
})
var data_16=document.createElement("td");
data_16.setAttribute("id","equals");
data_16.setAttribute("class","text-center");
data_16.innerHTML="=";
data_16.addEventListener("click",function(){
    let x=document.getElementById("input").value;
    let y=eval(x)
    document.getElementById("input").value=y;
})
var data_17=document.createElement("td");
data_17.setAttribute("id","divide");
data_17.setAttribute("class","text-center");
data_17.innerHTML="/";
data_17.addEventListener("click",function(){
    document.getElementById("input").value+=data_17.innerHTML;
})


row_five.append(data_14,data_15,data_16,data_17)
row_four.append(data_10,data_11,data_12,data_13)
row_three.append(data_6,data_7,data_8,data_9)
row_two.append(data_2,data_3,data_4,data_5)
data_1.append(inp);
row_one.append(data_1);
table.append(row_one,row_two,row_three,row_four,row_five);
content.append(table);
row2.append(empty2,content,empty3);
empty1.append(h1);
row1.append(empty1)
container.append(row1,row2);
document.body.append(container);

                    




                        


                    
            







        
    


        