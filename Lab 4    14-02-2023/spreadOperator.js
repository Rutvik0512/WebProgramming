//alternative way of concatination
let arr1 = [43,48,33,8,25]
let arr2 = ["Rutvik","Satwik","Nikhil","Akshith","Madhu"]
let spreadArray = [...arr1,...arr2]
console.log(spreadArray)


//Spreading the array into individual elements and searching in the pre-defined Math.max() function
function findMax(arr){
    //console.log(Math.max(arr)) is invalid
    return Math.max(...arr);
}
console.log("Maximum value in the array: "+ findMax([28,36.5,47,50,55,-27,-48]))

//Use of Spread operator for a function
function acceptParameters(a,b,c,d){
    console.log(a +" : "+b);
    console.log(c +" : "+d);
}
let nameArray = ["Pramod","Jyothi","Tarini","Rutvik","Extraa"]
acceptParameters(...nameArray)

//Use of Spread operator in Objects
// Common properties or fields are updated to the previosuly executed object
function Student(name, rollNumber){
    this.name = name
    this.rollNumber = rollNumber
}

function Parent(name, age, childName){
    this.name = name
    this.age = age
    this.childName = childName
}

var obj1 = new Student("Rutvik","20B81A05G3")
var obj2 = new Parent("Pramod",53,"Rutvik")
var obj3 = {
                ...obj1,
                ...obj2
            }
console.log(obj3)