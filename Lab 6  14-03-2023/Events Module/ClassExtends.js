// @ts-nocheck
const events = require("events")

class Student extends events{

    constructor(name,age){
        super()
        this.name = name;
        this.age = age;
    }
}

const Rutvik = new Student("Rutvik",20)
const Pramod = new Student("Pramod",53)

const family = [Rutvik, Pramod]

family.forEach(member => member.on("Age", msg => {
    console.log(msg)
}))

Rutvik.emit("Age",Rutvik.name+" and my age is: "+ Rutvik.age)