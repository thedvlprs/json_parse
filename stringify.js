// TODO: JSON.stringify

// The JSON.stringify() function converts a JavaScript object or value to a JSON string:

let users = [
    {
        id: 1,
        first_name: 'Robert',
        last_name: 'Schwartz',
        email: 'rob23@gmail.com',
    },
    {
        id: 2,
        first_name: 'Lucy',
        last_name: 'Ballmer',
        email: 'lucyb56@gmail.com',
    },
    {
        id: 3,
        first_name: 'Anna',
        last_name: 'Smith',
        email: 'annasmith23@gmail.com',
    },
];

let data = JSON.stringify(users);

console.log(typeof data);
console.log(typeof users);

console.log(data);
console.log(users);

// In the example, we have an array of users. We transform the array into a JSON string with the JSON.stringify() function.
