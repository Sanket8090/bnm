class user{
    constructor(username, age , email){
        this.username = username
        this.age = age
        this.email = email

    }
  encryptedPass(){
    console.log("hello")
    return `${this.username}`
  }
  userIdentity(){
    return `${this.age} age`
  }
}
 const chai = new user("rahul", 23,"cmmaurya")
 console.log(chai.userIdentity())

// ...................or...................


//  function user(username,age,password){
//     this.username = username
//     this.age = age
//     this.password = password
//  }

//  user.prototype.encryptedPass = function(){
//     console.log(`${this.username}`)
//  }

//  user.prototype.userIdentity = function(){
//     console.log(this.password)
//  }

 let p = new user("pankaj", 23, "cmmauery@nzc")
 p.encryptedPass()