let Mypromises = new Promise(function(myresolve, reject){
    setTimeout(function(){
        let err = true
        if(!err){
            myresolve({username:"mohan", class:5, id:"23ed4", email:"cmmau@gmail.com"})
            
        }else{
            reject("something went wrong is going behind")
        }
    },1000)
})
Mypromises.then(function(user){
    console.log(user)
    return user.username
})
.then(function(handling){
   console.log(handling)
}).catch(function(use){
 console.log(use)
}).finally(function(){
    console.log("finally my  code has executed")
})