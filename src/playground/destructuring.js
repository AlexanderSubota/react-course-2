//
// Object destructuring
//

// const person = {
//     age: 26,
//     location: {
//         city: "Philadelphia",
//         temp: 92
//     }
// };
//
// const {name: firstname = "Andrew", age} = person;
//
// console.log(`${firstname} is ${age}.`);
//
// const {temp: temperature, city} = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);
// }
//
// const book = {
//     title: "Ego is the enemy",
//     author: "Ryan Holiday",
//     publisher: {
//         name: "Penguin"
//     }
// };
//
// const {name: publisherName = "Self-Published"} = book.publisher;
//
// console.log(publisherName);

//
// Array destructuring
//

const address = ["1", "Lenin str"];
const [, city, state = 'New York'] = address;
console.log(`You are in ${city} ${state}`);

const item = ['Coffee (hot)', "$2.00", "$2.50", "$2.75"];
const [position, , cost] = item;
console.log(`A medium ${position} costs ${cost}`);

const add = ({a, b}) => {
    return a + b;
};

console.log(add({a: 2, b: 3}));