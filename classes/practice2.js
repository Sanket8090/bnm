class User{
    constructor(name){
        this.name = name
    }
    encripted(){
         
        console.log("hello", this.name)
    }

    
}
// let  p= new User("rajusg")
// p.encripted()

class Student extends User{
    constructor(name, age ){
       super(name)
        this.age = age
        console.log("hello ji")
    }
}
 let p = new Student("rajesh",34)
 console.log(p)
 p.encripted()