//Defiing a class in ES6
class Person{
    constructor(name,age){
        this.name = name
        this.age = age
    }

    greet(){
        console.log(`Hello ${this.name}`)
    }

    occupation(){
        console.log("It depends on which class I extend")
    }
}

//creating an instance of the class
    let person = new Person("Rutvik",20)

//accessing class properties
    console.log("name: "+person.name+", age: "+person.age)
    person.greet()

//Inheritance
    class Student extends Person{
        constructor(name,age,college){
        //call to the Parent constructor
            super(name,age)
            this.college = college
        }
        // method overriding
        occupation(){
            // super.occupation() calling parent method using super keyword
            console.log("I'm a Student")
        }
    }

    let student1 = new Student("Akka",22,"CVR College of Engineering")
    console.log(student1)
    student1.occupation()


    