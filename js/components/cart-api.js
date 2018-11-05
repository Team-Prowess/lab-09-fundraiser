let cart = [];

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

const cartApi = {
    get() {
        const json = localStorage.getItem('cart');
        if(json) {
            cart = JSON.parse(json);
        }
        return cart;
    },
    add(item) {
        const orderItem = cart.find(item => {
            return item.name === item.name;
            // if there's a problem with the line above, I think
            // it may be fixed by changing it to:
            // return item.name === product.name;
            // however if we do that, I think we'd have to change multiple
            // instances of 'item' to 'product' throughout project
        });

        if(orderItem) {
            orderItem.quantity++;
        }
        else {
            cart.push({
                name: item.name,
                quantity: 1
            });
        }
        saveCart();
    }
};

export default cartApi;