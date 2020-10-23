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
input.id="inp";

var button=document.createElement("button")
button.setAttribute("class","btn btn-primary")
button.innerHTML="Generate"
button.addEventListener("click",random_number)
var obj={};
function random_number(){
    var str='';
    var num=Math.floor(Math.random()*10)
    if(num in obj){
        obj[num]+=1;
    }else{
        obj[num]=1;
    }
    if(Object.keys(obj).length===8){
        document.getElementById("inp").value="";
        for(var item in obj){
            str+=item;
        }
        document.getElementById("inp").value=str;
    }else{
        random_number();
    }
}





cover.append(input)
col2.append(cover)
row.append(col1,col2,col3)
container.append(row,button)
document.body.append(container)