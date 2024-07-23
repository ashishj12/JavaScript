function getevennumber(value, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (value % 2 == 0)
                resolve(value)
            else
                reject(new Error("value is not even number"));
        }, delay)
    });
}

//promise chain

getevennumber(4, 1000)
    .then(result => {
        console.log("result with  even", result);
        return getevennumber(2, 2000);
    })
    .then(result => {
        console.log("result with  even", result)
    })

    .catch(error => {
        console.log("given number is not an even number", error);
    })