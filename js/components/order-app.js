import itemsApi from './products-api.js';
import itemList from './products-list.js';
import cartApi from './cart-api.js';
import shoppingCart from './shopping-cart.js';

const items = itemsApi.getAll();
const cart = cartApi.get();

shoppingCart.init(cart);

itemList.init(items, function(item) {
    cartApi.add(item);
    shoppingCart.update(cart);
}, 
function(item) {
    cartApi.remove(item);
    shoppingCart.update(cart);
}
);