//throw and catch statement  that throws an error
try {
    throw Error("Constructed Error will be occured");
}
catch (err) {
    console.log(err)
}

//fix the throw error

const fixstring = "cannot be reassigned";

try{
    fixstring = "new string";
}
catch(err){
    console.log('an new error occured')
}

console.log("prints after error")