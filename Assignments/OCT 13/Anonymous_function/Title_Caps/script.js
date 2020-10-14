var str="When flood comes fish eats ants when the water dries ants eats fish.";

var capitalize=function(str){
    var str_arr=str.split(' ');
    var new_str='';
    for(var i=0;i<str_arr.length;i++){
        for(var j=0;j<str_arr[i].length;j++){
            if(j==0){
                new_str+=str_arr[i][j].toUpperCase();
            }else{
            new_str+=str_arr[i][j];
            }
        }
        new_str+=' ';
    }
    console.log(new_str)
}

capitalize(str)

