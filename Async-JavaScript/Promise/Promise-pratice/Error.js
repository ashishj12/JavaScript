//Create a JavaScript Promise that, after a delay of 2 seconds, either resolves with the message "Hello World" or rejects with the error message "Error occurred".

const random = new Promise((resolve, reject) => {
    setTimeout(() => {
        const randomPromise = Math.random()
        if (randomPromise > 0.5) {
            resolve("Hello World");
        }
        else {
            reject("Error Occurred");
        }
    }, 2000);
});

random
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error);
    });