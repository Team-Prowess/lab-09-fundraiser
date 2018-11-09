let cart = [];

function saveCart() {
    console.log('saving cart', cart);
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
        const orderItem = cart.find(product => {
            return product.name === item.name;
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
    },

    remove(item) {
        const orderItem = cart.find(product => {
            return product.name === item.name;
        });
        if(orderItem) {
            orderItem.quantity--;
            if(orderItem.quantity === 0) {
                const index = cart.findIndex(product => {
                    return product.name === item.name;
                });
                cart.splice(index, 1);
            }
        }
        saveCart();
    },
    clear() {
        cart = [];
        saveCart();
    }
};

export default cartApi;