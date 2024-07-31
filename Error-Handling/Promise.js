function getNumberPromise(input) {
    return new Promise((resolve, reject) => {
        if (typeof input === 'number') {
            resolve("Valid number: " + input);
        } else {
            reject(new Error("Input is not a number"));
        }
    });
}

getNumberPromise(10)
    .then(result => console.log('Resolved with:', result))
    .catch(error => console.error('Rejected with:', error.message));

getNumberPromise("10")
    .then(result => console.log('Resolved with:', result))
    .catch(error => console.error('Rejected with:', error.message));
