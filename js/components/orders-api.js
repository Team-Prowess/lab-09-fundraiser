let orders = [];

function saveOrders() {
    localStorage.setItem('orders', JSON.stringify(orders));
}

const ordersApi = {
    get() {
        const json = localStorage.getItem('orders');
        if(json) {
            orders = JSON.parse(json);
        }
        return orders;
    },
    add(order) {
        const orderItem = orders.find(item => {
            return item.name === item.name;
            // if line directly above causes a problem, I think 
            // it may be fixable by renaming:
            // === item.name, but not totally sure to what.
            // More detail on cart-api.js 
        });

        if(orderItem) {
            orderItem.quantity++;
        }
        else {
            orders.push({
                name: order.name,
                quantity: 1
            });
        }
        saveOrders();
    }
};


export default ordersApi;

