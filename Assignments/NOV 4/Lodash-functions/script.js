// The ES6 implementation of CHUNK function is
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var arr1 = [1, 2, 3, 4, "welcome", 5, "hai"];
var arr2 = [5, 10, 50, 20, 70];
console.log("CHUNK function");
var chunk = function (array, size) {
    if (!array.length) {
        return [];
    }
    var head = array.slice(0, size);
    var tail = array.slice(size);
    return __spreadArrays([head], chunk(tail, size));
};
console.log(chunk([1, 2, 3, 4, "welcome", 5, "hai"], 3));
// The ES6 implementation of REDUCE function is
console.log("REDUCE function");
var reduceFunction = function (array, func, total) {
    if (total === void 0) { total = 0; }
    for (var i = 0; i < array.length; i++) {
        total = func(total, array[i]);
    }
    return total;
};
var addFunc = function (a, b) {
    return a + b;
};
console.log("The input is " + arr2);
console.log("After reducing the array the result is : " + reduceFunction(arr2, addFunc));
//ES6 implementation of FILTER function is
console.log("FILTER function");
var filterFunction = function (array) {
    var string_array = [];
    for (var i = 0; i < array.length; i++) {
        if (isNaN(array[i]))
            string_array.push(array[i]);
    }
    return string_array;
};
console.log("Input is " + arr1);
console.log("After filterring out only strings from the array the result is: " + filterFunction(arr1));
//ES6 implementation of FIND function is 
console.log("FIND function");
var findFunction = function (array) {
    var max_to_20 = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] > 20) {
            max_to_20.push(array[i]);
            break;
        }
    }
    return max_to_20;
};
console.log("Input is " + arr2);
console.log("To find the  number which is immediately greater than 20 is: " + findFunction(arr2));
//Es6 implementation of SUM function is 
console.log("SUM function");
var sumFunc = function (array) {
    var output = 0;
    for (var i = 0; i < array.length; i++) {
        output += array[i];
    }
    return output;
};
console.log("Input is " + arr2);
console.log("Sum of the given array is " + sumFunc(arr2));
