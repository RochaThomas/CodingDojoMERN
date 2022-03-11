
const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];

const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley'
};

// const copy = { ...person };
// console.log(copy);

// const {...person: copy}= person; doesnt work?
// const {...copy} = person; <--- this does worl however
console.log(copy);

const [,randAnimal1,,randAnimal2] = animals;
console.log(randAnimal1);
console.log(randAnimal2);

