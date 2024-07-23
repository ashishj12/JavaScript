//async function without await 
// async function f1() {
//     console.log("this is async function without await step")
//     return 10;  //return an promise
// }

// f1()
//     .then(result => {
//         console.log(result);
//     });

//async function without await but with error

// async function f2(){
//     console.log("this is async function with error")
//     throw new Error; //return an promise(rejected)
// }

// f2()
// .catch(Error=>{
//     console.log(`error msg is ${Error}`);
// })


//async function with resolve/rejected method


function getInfo() {
    return new Promise((resolve, reject) => {
        const randomNumber = Math.random();
        setTimeout(() => {
            if (randomNumber < 0.5)
                resolve(randomNumber);
            else
                reject(new Error("wrong value error"));
        }, 2000)
    })
}


//create async function which is calling getInfo

async function getNumberInfo() {
    try {
        const result = await getInfo();//async step
        console.log("Result", result)
    }
    catch(error) {
        console.log("Error", Error);
    }
}


getNumberInfo();