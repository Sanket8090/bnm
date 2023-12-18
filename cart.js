function printdeta(){
    console.log("this has resolved by the end of year")
}

let myPromise1 = new Promise(function(resolve, reject) {
    let yesh = true
    setTimeout(function(){
       if(yesh){
        resolve(printdeta())
       }else{
        reject("hello ji reject")
       }
    },2000)
});
myPromise1.catch(function(user){
    console.log(user)
})

// {
//   [[PromiseState]] : "fulfilled",
//   [[PromiseResult]] : "I am done"
//   [[Prototype]] : Promise,
// }