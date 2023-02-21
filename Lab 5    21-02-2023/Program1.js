/* 
Write a JavaScript console program to compare 2 strings using promise function (resolve,
reject), if the strings are same, resolve the promise, else reject it.
Constraints:
1. Case sensitive string comparison should be done.
2. Promises should be consumed by registering functions .then and .catch method.
*/

function compareString(s1,s2){
    return new Promise(function(resolve,reject){
        if(s1.localeCompare(s2) == 0) resolve("Equal Strings");
        else                          reject("Unequal Strings");
    });
}

s1 = "String 1";
s2 = "String 2";
var result = compareString(s1,s2);
result.then(
    (success)=> console.log(success),
    (error)=>console.log(error));

