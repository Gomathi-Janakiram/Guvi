var arr=[5,10,20,40];
var sum=0;
var array_sum=function (arr){
    for(var i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    console.log(sum)
}
array_sum(arr)