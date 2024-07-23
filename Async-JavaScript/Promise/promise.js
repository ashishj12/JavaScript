// //pending,fullfill or rejected(with an reason)
// const randomPromise = new Promise((resolve, reject) => {

//     //Async Function

//     setTimeout(() => {
//         const randomvalue = Math.random();
//         if (randomvalue > 0.5)
//             resolve(randomvalue);
//         else {
//             reject(new Error("value is too small"));
//         }
//     }, 2000)
// })

// randomPromise.then(result => {
//     console.log("Promise is fullfill with their value ", result);
// })
//     .catch(error => {
//         console.log("promise is reject with error :", error)
//     })
