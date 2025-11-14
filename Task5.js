const products = [
    {name: "Keyboard", price: 2500, qty: 2},
    {name: "Mouse", price: 1500, qty: 3},
    {name: "Monitor", price: 22000, qty: 1}
];

const totalValue = products.reduce((sum, item) => {
    return sum + item.price * item.qty;
}, 0);

console.log("Total value of all products:", totalValue);
