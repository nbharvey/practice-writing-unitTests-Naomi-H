function addItem(cart, item, quantity) {
    cart.push({ item, quantity });
    }

function removeItem(cart, item) {
const index = cart.findIndex(i => i.item === item);
if (index > -1) {
    cart.splice(index, 1);
}
} 

function getTotalItems(cart) {
    return cart.reduce((total, item) => total + item.quantity, 0);
}

module.exports = { addItem, removeItem, getTotalItems, };