const { addItem, removeItem, getTotalItems } = require('./cart.js');

describe("The addItem()", () => {
    test("Should add a string to the shopping cart", () => {
        const cart = [];
        addItem(cart, "apple", 2);
        expect(cart).toEqual([{ item: "apple", quantity: 2 }]);
    });
});

describe("The addItem()", () => {
    test("Should add a string to the shopping cart", () => {
        const cart = [];
        addItem(cart, "banana", 3);
        expect(cart).toEqual([{ item: "banana", quantity: 3 }]);
    });
});

describe("The removeItem()", () => {
    test("Should remove a string to the shopping cart by name", () => {
        const cart = [{ item: "apple", quantity: 2 }];
        removeItem(cart, "apple");
        expect(cart).toEqual([]);
    });
});

describe("The getTotalItems()", () => {
    test("Should return total quantity of all items", () => {
        const cart = [
            { item: "apple", quantity: 2 },
            { item: "banana", quantity: 3 }
        ];
        expect(getTotalItems(cart)).toEqual(5);
    });
});
// addItem(cart, "apple", 2);
// addItem(cart, "banana", 2);
// removeItem(cart, "apple");
// console.log(cart);
// console.log("Total items:", getTotalItems(cart));