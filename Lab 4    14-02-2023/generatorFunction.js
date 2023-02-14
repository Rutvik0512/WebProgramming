//generator function
function* simpleGenerator() {
    console.log("Before 1");
    yield 1;
    console.log("After 1");
    console.log("Before 2");
    yield 2;
    console.log("After 2");
    console.log("Exit");
   }

   let genObj = simpleGenerator();
    console.log(genObj.next());
    console.log(genObj.next());
    console.log(genObj.next());

//generator function that yields
function* yieldGenerator(){
    yield 1;
    yield "Nii Akka";
    yield 20.56;
}

let obj = yieldGenerator();
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
    