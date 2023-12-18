class User{
    constructor(name, age){
        this.name = name
        this.age = age 

    }

    get name(){
     return this._name
    }
    set name(value){
        this._name = value
    }


}

 let p = new User("rajesh", 23)
 console.log(p)