let person = {
    name: "Ashish",
    age: 21,
    country: "India",
};

//Dot Notation
console.log(person.name);
console.log(person.age);
console.log(person.country);

//bracket Notation
console.log("Bracket Notation : ", person['name']);

//adding a property

person.isSleeping = false;

//modifying a property

person.age = 22;

//deletion of a property

delete person.country;

console.log(person);

