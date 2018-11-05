function makeItem(item) {
    const html = /*html*/`

        <li class="item">
        <img src="../../assets/${item.image ? item.image : 'Cari-tronFrisbee.jpg'}">
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

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const list = document.getElementById('cart-list');

const shoppingCart = {
    init(cart) {
        for(let i = 0; i < cart.length; i++) {
            const dom = makeItem(cart[i]);
            list.appendChild(dom);
        }
    },
    update(cart) {
        while(list.lasElementChild) {
            list.lastElementChild.remove();
        }
        shoppingCart.init(cart);
    }
};

export default shoppingCart;