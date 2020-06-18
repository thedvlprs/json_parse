// TODO: JSON.parse reviver function

// The JSON.parse() function can take an optional reviver function as the second parameter. It can perform a transformation on the resulting object before it is returned:

let data =
    '{ "name": "John Doe", "dateOfBirth": "1976-12-01", "occupation": "gardener"}';

let user = JSON.parse(data, (k, v) => {
    if (k == 'dateOfBirth') {
        return new Date(v);
    } else {
        return v;
    }
});

console.log(user);

// In the example, we use the reviver function to transform a string property into a date
