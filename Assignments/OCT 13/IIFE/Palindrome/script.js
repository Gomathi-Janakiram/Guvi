(function(arr){
    var palindrome_str=[];
    //looping through the array
    for(var i=0;i<arr.length;i++){
        lower=arr[i].toLowerCase();  //converting all the words to LowerCase
        //comparing original string with the reversed string
        if(lower===lower.split('').reverse().join('')){   
            palindrome_str.push(arr[i])
        }
    }
    console.log(palindrome_str);
})(["Mom","Madam","wow","yes"])
