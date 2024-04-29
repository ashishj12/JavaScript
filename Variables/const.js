const person = {
    name: 'Mayank',
    age: 21
};

console.log(person.name);    // Output: Mayank

// Modifying object properties is allowed
person.name = 'Love';
console.log(person.name);    // Output: Love

// Attempting to reassign the variable will throw an error
person = {};    // Throws TypeError: Assignment to constant variable.