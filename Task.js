const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
console.log("Fruits:", fruits);

console.log("First fruit:", fruits[0]);

console.log("Last fruit:", fruits[fruits.length - 1]);

fruits.push("Pineapple");
console.log("After adding:", fruits);

fruits.splice(1, 1);
console.log("After removing 2nd fruit:", fruits);

console.log("Length:", fruits.length);

for (let i = 0; i < fruits.length; i++) {
    console.log("For loop:", fruits[i]);
}

fruits.forEach(fruit => {
    console.log("forEach:", fruit);
});

