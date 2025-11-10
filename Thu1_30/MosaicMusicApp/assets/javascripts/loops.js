let arr = [4, 8, 15, 16, 23, 42];

// Traditional for loop
for (let i = 0; i < arr.length; i++) {
    console.log("Index " + i + ": " + arr[i]);
}

// for...of loop
for(let value of arr) {
    console.log("Value: " + value);
}

// for..in loop
for(let index in arr) {
    console.log(`Index: ${index}, Value: ${arr[index]}`);
}

let users = [
    {name: "Alice", age: 25},
    {name: "Bob", age: 30},
    {name: "Charlie", age: 35}
]

users.forEach(user => {
    console.log(`${user.name} is ${user.age} years old.`);
});

users.filter(user => user.age > 25);
