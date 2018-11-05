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
            // then, when quantity is zero, make cart available in the list

        //
        });

        if(orderItem) {
            orderItem.quantity++;
            // orderItem.quantity += quantity;
            // if(orderItem.quantity <- 0) {
                // cart.splice(index, 1);
            }
        }
        else {
            cart.push({
                name: item.name,
                quantity: 1
            });
        }
        saveCart();
    }

    // THIS WORKED: Marty lecture / Travis code:
    // remove(cookie) {
        // const orderItem = cart.find(item => {
            // return item.name === item.name;
        // });
        // if(orderItem) {
            // orderItem.quantity--;
            // if(orderItem.quantity )=== 0) {
                // const index = cart.findIndex(item => {
                    // return item.name === item.name;
            // });
            // This will retrun it via splice (not slice)
            // cart.splice(index, 1);
            
        }
    }
    saveCart();
}
};

export default cartApi;