var cat = {
    name: "Fluffy",
    activities: ['play', 'eat cat food'],
    catFriends: [
    {
    name: 'bar',
    activities: ['be grumpy', 'eat bread omblet'],
    weight: 8,
    furcolor: 'white'
    }, 
    {
    name: 'foo',
    activities: ['sleep', 'pre-sleep naps'],
    weight: 3
    }
    ]
}

//Add height and weight to Fluffy
cat["height"]=23;
cat["weight"]=3.6;
  //console.log(cat);


//Fluffy name is spelled wrongly. Update it to Fluffyy
cat["name"]="Fluffyy"

//List all the activities of Fluffyy’s catFriends.
friends_activities=cat["catFriends"]
for (var i in friends_activities){
    iter=friends_activities[i]
    console.log("Activities of Fluffyy’s catFriends"+":"+iter["activities"])
}

//Print the catFriends names.
catFriends=cat["catFriends"]
for(var i in catFriends){
    iter=catFriends[i];
    console.log("catFriends names"+":"+ iter["name"])
}

//Print the total weight of catFriends


total_friends_weight=0;
friends=cat["catFriends"];
catFriends_weight=[];
for(var i in friends){
    iter=friends[i];
    total_friends_weight+=iter["weight"]
}
console.log("total weight of catFriends"+":"+ total_friends_weight)

//Add 2 more activities to bar & foo cats
for(var i in friends){
    iter=friends[i];
    iter["activities"].push("dance")
    iter["activities"].push("jump")
}
console.log(cat["catFriends"])


//Update the fur color of bar
cat["catFriends"][0].furcolor="grey"
console.log(cat)


var myCar = {
 make: 'Bugatti',
 model: 'Bugatti La Voiture Noire',
 year: 2019,
 accidents: [
 {
 date: '3/15/2019',
 damage_points: '5000',
 atFaultForAccident: true
 },
 {
 date: '7/4/2022',
 damage_points: '2200',
 atFaultForAccident: true
 },
 {
 date: '6/22/2021',
 damage_points: '7900',
 atFaultForAccident: true
 }
 ]
}

// Loop over the accidents array. Change atFaultForAccident from true to false.
acci=myCar["accidents"]
//console.log(acci)
for(var i in acci){
    iter=acci[i];
    iter["atFaultForAccident"]=false;
}
console.log(myCar)

//Print the dated of my accidents
for(var i in acci){
    iter=acci[i];
    console.log("Dates of accidents"+":"+iter["date"])
}

//Write a function called “printAllValues” which returns an newArray of all the input object’s values.

var object = {name:'RajiniKanth', age: 33, hasPets : false};
var values=[]
function printAllValues(obj){
    for(var i in obj){
        values.push(obj[i])
    }
    console.log("input object’s values"+":" + values)
}
printAllValues(object)

//Write a function called “printAllKeys” which returns an newArray of all the input object’s keys.

var keys=[]
function printAllKeys(obj){
    for(var i in obj){
        keys.push(i)
    }
    console.log("input object’s keys"+":"+ keys)
}
printAllKeys(object)

//Write a function called “convertObjectToList” which converts an object literal into an array of arrays.

var object = {name: 'ISRO', age: 35, role: 'Scientist'};
var list_of_lists=[]
function convertObjectToList(obj){
    for(var i in object){
    list_of_lists.push([i,object[i]])
    }
    console.log("ObjectToList"+":"+ list_of_lists)
}
convertObjectToList(object)

//Write a function ‘transformFirstAndLast’ that takes in an array, and returns an object with:
//1) the first element of the array as the object’s key, and
//2) the last element of the array as that key’s value.
var array = ['GUVI', 'I', 'am', 'Geek'];
function transformFirstAndLast(arr){
    var obj={}
    obj[arr[0]]=arr[arr.length-1]
    console.log(obj)
}
transformFirstAndLast(array)




