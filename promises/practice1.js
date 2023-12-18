let mypromises = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve();
       console.log("hello world") 
    //    resolve();
    }, 6000)
})
mypromises.then(function(){
    console.log("hello")
})
// ...................................or....................

new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve();
       console.log("hello world people") 
    //    resolve();
    }, 1000)
})
.then(function(){
    console.log("hello sweet")
})