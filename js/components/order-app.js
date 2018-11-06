import productsApi from './products-api.js';
import cartApi from './cart-api.js';
import productList from './products-list.js';
import shoppingCart from './shopping-cart.js';
import itemList from './products-list.js';

const products = productsApi.getAll();
const cart = cartApi.get();

const shoppingCart = new ShoppingCart(cart, items);

const productList = new ProductList(items, null, (item, quantity) => {
    cartApi.order(item, quantity);
    shoppingCart.update(cart);
});


// productList.init(products, null,
    // ...??  function(product) {
    // productList.init(**null, etc) {
    // cartApi.add(product);
    // shoppingCart.update(cart);

    // copying off Abel and Jei, they've got the following commented out:
    // customerApr.add(customer);
},


// 11-5 Marty's lecture using Tyler's code calling to (chk)
    // function(item) {  ***beings on same line as }, with 1 space between comma and f
        // cartApi.remove(item);
        // shoppingCart.update(cart);
// }

);

