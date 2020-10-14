var a=[1,12,23,34,45]
var b=[2,10,15,25,38]

var median=function(a,b){
    var merged=a.concat(b)
    var sorted=merged.sort(function(a,b){return a-b})  //[ 1, 2, 10, 12, 15, 23, 25, 34, 38, 45 ]
    var middle_num=(sorted.length+1)/2;   //returns 5.5 since length is even
    return (sorted[Math.floor(middle_num)-1]+sorted[Math.ceil(middle_num)-1])/2 //since indexing starts from 0
}

var result=median(a,b)
console.log(result)

