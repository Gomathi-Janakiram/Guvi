(function(arr){
    var unique=[];
    var obj={};
    //creating object with elements as its key and its count as value
    for(var i=0;i<arr.length;i++){
        if(arr[i] in obj){
            obj[arr[i]]+=1;
        }
        else{
            obj[arr[i]]=1;
        }
    }
    //looping over the object and getting its key alone
    for(var key in obj){
        unique.push(key)
    }
    console.log(unique) ;
})(["dog","fish","dog","cat","parrot","parrot","cat"])

