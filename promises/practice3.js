let promisefive = new Promise(function(resolve, rejection){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve(function(){
                console.log("this is my inner code")
            })
        }else{
            rejection("somthing went wrong in innercode")
        }
    })
})
// async function consumepromise(ud){
//     let response = await promisefive
//     response();
   

// }
// consumepromise()

async function consumepremises(){
    try{
        let response = await promisefive
        response()  
    }catch(error){
        console.log(error);
    }
}
consumepremises()