(function(arr){
    var prime=[];
    var count=0;
    for(var i=0;i<arr.length;i++){
        for(var j=1;j<=arr[i];j++){
            if(arr[i]%j===0){
                count+=1;
            }
        }
        if(count===2){
            prime.push(arr[i])
        }
        count=0;
    }
    console.log(prime) 
})([4,5,7,9,12,45,31,19,80])


