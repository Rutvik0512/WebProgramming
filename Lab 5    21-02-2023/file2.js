export function greeting(){
    console.log("Welcome to file2.js File");
}

export function addition(a,b) {
    return a+b;
}

export function multiplication(a,b){
    return a*b;
}

export default function product(a,b,c){
    return a*b*c;
}
    
export{
    addition as add
}