function printdeta(){
    console.log("this has resolved by the end of year")
}

let myPromise1 = new Promise(function(resolve, reject) {
    setTimeout(function(){
        resolve(printdeta())
        reject("hello")
    },2000)
});
// myPromise1.then(function(user){
//     console.log(user)
// })