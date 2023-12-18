function person(name, age, id){
  this.name = name
  this.age = age
  this.id = id
//  this.get = function(){
//     console.log(this.name)
//  }
}

person.prototype.print = function(){
    console.log(this.name)
}

// let p = new person("rahul",23, 34)
// p.print()
// console.log(p)
Object.setPrototypeOf(Student.prototype, person.prototype)

function Student(name, age, id, rollno){
    person.call(this, name, age,id)
    this.rollno = rollno
}
let p = new Student("ajay", 23,45,567)
p.print()
console.log(p)
