// TODO: JSON.parse array

// In this example we parse JSON array into a JavaScript array:

let data = `[
  {
    "id": 1,
    "first_name": "Robert",
    "last_name": "Schwartz",
    "email": "rob23@gmail.com"
  },
  {
    "id": 2,
    "first_name": "Lucy",
    "last_name": "Ballmer",
    "email": "lucyb56@gmail.com"
  },
  {
    "id": 3,
    "first_name": "Anna",
    "last_name": "Smith",
    "email": "annasmith23@gmail.com"
  }
]`;

let users = JSON.parse(data);

console.log(typeof users);
console.log(users[1]);
console.log(users);
