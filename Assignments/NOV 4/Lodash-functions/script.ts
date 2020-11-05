// The ES6 implementation of CHUNK function is

let arr1 = [1, 2, 3, 4, "welcome", 5, "hai"];
let arr2 = [5, 10,50,20,70]

console.log(`CHUNK function`)
const chunk = function(array, size) {
    if (!array.length) {
      return [];
    }
    const head = array.slice(0, size);
    const tail = array.slice(size);
  
    return  [head, ...chunk(tail, size)];
  };
  
console.log(chunk([1, 2, 3, 4, "welcome", 5, "hai"],3))
  

// The ES6 implementation of REDUCE function is

console.log(`REDUCE function`)
const reduceFunction = (array, func, total = 0) => {

    for (let i = 0; i < array.length; i++) {
        total = func(total, array[i]);
    }
    return total;
};

const addFunc = (a, b) => {
    return a + b;
}
console.log(`The input is ${arr2}`)
console.log(`After reducing the array the result is : ${reduceFunction(arr2,addFunc)}`)

//ES6 implementation of FILTER function is

console.log(`FILTER function`)
const filterFunction=(array)=>{
    let string_array=[];
    for(let i=0;i<array.length;i++){
        if(isNaN(array[i])){
            string_array.push(array[i])
        }
    }
    return string_array
}
console.log(`Input is ${arr1}`)
console.log(`After filterring out only strings from the array the result is: ${filterFunction(arr1)}`)

//ES6 implementation of FIND function is 

console.log(`FIND function`)
const findFunction=(array)=>{
    let max_to_20=[];
    for(let i=0;i<array.length;i++){
        if(array[i]>20){
            max_to_20.push(array[i]);
            break;
        }
    }
    return max_to_20
}
console.log(`Input is ${arr2}`)
console.log(`To find the  number which is immediately greater than 20 is: ${findFunction(arr2)}`)

//Es6 implementation of SUM function is 

console.log(`SUM function`)
const sumFunc=(array)=>{
    let output=0;
    for(let i=0;i<array.length;i++){
        output+=array[i];
    }
    return output
}

console.log(`Input is ${arr2}`)
console.log(`Sum of the given array is ${sumFunc(arr2)}`)


