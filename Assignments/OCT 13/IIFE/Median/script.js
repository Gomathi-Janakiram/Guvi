(function(a,b){
    var merged=a.concat(b)
    var sorted=merged.sort(function(a,b){return a-b})  //[ 1, 2, 10, 12, 15, 23, 25, 34, 38, 45 ]
    var middle_num=(sorted.length+1)/2;   //returns 5.5 since length is even
    console.log ((sorted[Math.floor(middle_num)-1]+sorted[Math.ceil(middle_num)-1])/2) //since indexing starts from 0
})([1,12,23,34,45],[2,10,15,25,38]);



