function makeItem(item) {
    const html = /*html*/`

        <li class="item">
        // Marty added a item * price section up here, but it may have only applied if the section below that he didn't like as much is in play...
        <img src="../../assets/${item.image ? item.image : 'Cari-tronFrisbee.jpg'}">
// <li>${item.name} <strong>(${item.quantity} * $${item.price.toFixed(2)} =
// <strong>$${item.quantity} * $${}

            <h3> 
                ${item.name}
            </h3>  
            <h4>  
                ${item.description}
            </h4>    
                ${item.price}
            </h4>  

            <br> 
            <button class="danger">Remove</button>   
        </li>`;

// Marty's 11-5 lecture - there were several list items as below:
// <ul id="items"
    // <li class="item">...</li>
    // <li etc

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const list = document.getElementById('cart-list');

const shoppingCart = {
    init(cart, items) {
        // shoppingCart.items = items;
        // shoppingCart.populate(cart);
        // };
        for(let i = 0; i < cart.length; i++) {
            const dom = makeItem(cart[i]);
            list.appendChild(dom);
        }
    },

    // populate(cart) {
        // const items = shoppingCart.items;
        // let total = 0;
        // for(let i = 0; i < cart.length; i++) {
            // const item = cart[i]; (Marty doesn't like this as much...)
            // const item = items.find(functionxxxxx)
                //  
            // }      )
            // const dom = makeItem(cart[i]);
            // list.appendChild(dom);
    // }
    update(cart) {
        while(list.lasElementChild) {
            list.lastElementChild.remove();
        }
        shoppingCart.init(cart);
    }
};

export default shoppingCart;