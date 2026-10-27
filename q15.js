function Order(process) {
    return new Promise((resolve,reject)=>
    {
        setTimeout(() => {
            if(process){
            resolve("Shopping Completed!")
        }
        else{
            reject("Shopping Failed!")
        }
        }, 2000);
    }
    )
}
async function test() {
    try {
        const displaying = await Order(false)
        console.log(displaying);
    } catch (error) {
        console.log(error);
    }
}
test()