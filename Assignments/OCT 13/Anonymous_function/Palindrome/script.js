var arr=["Mom","Madam","wow","yes"];

var is_palindrome=function(arr){
    var palindrome_str=[];
    //looping through the array
    for(var i=0;i<arr.length;i++){
        lower=arr[i].toLowerCase();  //converting all the words to LowerCase
        //comparing original string with the reversed string
        if(lower===lower.split('').reverse().join('')){   
            palindrome_str.push(arr[i])
        }
    }
    return palindrome_str;
}

var result=is_palindrome(arr)
console.log(result)

