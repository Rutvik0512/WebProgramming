// Illustration of rest operator(...), the name can be any ...name
let arr = [1,2,3,4,5,6,7,8,9]
const [a,b,c,...restOperator] = arr;
console.log(a+" "+b+" "+c)
console.log(restOperator)

//skipping the elements and then using the rest operator
const [first,second, , , ,...temp] = arr;
console.log("First: " +first+"   Second: "+second)
console.log(temp)