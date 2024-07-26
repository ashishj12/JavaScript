// // //pending,fullfill or rejected(with an reason)
// // const randomPromise = new Promise((resolve, reject) => {

// //     //Async Function

// //     setTimeout(() => {
// //         const randomvalue = Math.random();
// //         if (randomvalue > 0.5)
// //             resolve(randomvalue);
// //         else {
// //             reject(new Error("value is too small"));
// //         }
// //     }, 2000)
// // }

// // randomPromise.then(result => {
// //     console.log("Promise is fullfill with their value ", result);
// // })
// //     .catch(error => {
// //         console.log("promise is reject with error :", error)
// //     })



// let myPromise = new Promise(function (resolve, reject) {
//     let result = true;

//     if (result == true) {
//         resolve("OK");
//     }
//     else {
//         reject("Error");
//     }
// });

// myPromise.then(x => myDisplay(x), x => myDisplay(x));


//pokemon informletation

// const ALL_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon?limit=50';

// // We have discussed this function already!
// let promise = getPromise(ALL_POKEMONS_URL);

// const consumer = () => {
//     promise.then(
//         (result) => {
//             console.log({result}); // Log the result of 50 Pokemons
//         },
//         (error) => {
//             // As the URL is a valid one, this will not be called.
//             console.log('We have encountered an Error!'); // Log an error
//     });
// }

// consumer();