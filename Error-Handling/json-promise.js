function parseJSON(jsonString) {
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        return "Error: Invalid JSON string";
    }
}

console.log(parseJSON('{"name": "John"}')); 
console.log(parseJSON('Invalid JSON')); 
