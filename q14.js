function product(process) {
    return new Promise((resolve,reject)=>
    {
        
            if(process){
            resolve("productname")
        }
        else{
            reject("Task Failed!")
        }
       
    }
    )
}

