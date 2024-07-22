let PersonPrototype = {
    name : 'Ashish'
};

let person = Object.create(PersonPrototype);

console.log(person);

person.firstname = 'Ashish';
person.lastname = 'Kumar';

person.age = 21
person.hobbies = ['Gaming','Coding'];
console.log(person)