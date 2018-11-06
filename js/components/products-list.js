
function makeItem(item) {
    const html = /*html*/`
        <li>
            <img src="../../assets/${item.image ? item.image : 'Cari.jpg'}">
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
        </li>
             `;
                
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const list = document.getElementById('items');

const itemList = {

    
    init(items, onIncrement, onDecrement) {
        for(let i = 0; i < items.length; i++) {
            itemList.add(items[i]);
        }
        
        itemList.items = items;
        itemList.onIncrement = onIncrement;
        itemList.onDecrment = onDecrement;
    },
    
    add(item) {
        const dom = makeItem(item);
       
        // const removeButton = dom.querySelector('button');
        const listItem = dom.querySelector('li');

        listItem.addEventListener('click', function() {
            itemList.onIncrement(item);
        });

        const buttonRemove = dom.querySelector('button');
        buttonRemove.addEventListener('click', function() {
            itemList.onDecrement(item);
        });

        list.appendChild(dom);
    },
    remove(index) {
        list.querySelectorAll('li')[index].remove();
    }
};

export default itemList;