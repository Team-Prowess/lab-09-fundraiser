// Marty added import html...


function makeItem(item) {
    const html = /*html*/`
        
        <li>
        // <h3
            <img src="../../assets/${item.image ? item.image : 'Cari-tronFrisbee.jpg'}">
            <h3> 
                ${item.name}
            </h3>  
            <h4>  
                ${item.description}
            </h4>    
                ${item.price}
            </h4>  
            <div class"order

            <br> 
            // <button class="danger">Remove</button>   
        </li>
            `;
                
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const list = document.getElementById('items');

const itemList = {  
    init(items, onSelect) {
        // onOrder should wire up the option buttons 
        // from Marty's 11-5 lecture, need 2 lines of communication, one for add and 
        // another for remove - below instead of above
        // itemList.items = items;
        // itemList.onSelect = onSelect;
        // itemList.onRemove = onRemove;
        for(let i = 0; i < items.length; i++) {
            itemList.add(items[i]);
        }
        itemList.onSelect = onSelect;
        itemList.items = items;
    },
    add(item) {
        const dom = makeItem(item);
       
        // const removeButton = dom.querySelector('button');

        // if(fruitList.onSelect(fruit) {

        })
        const listItem = dom.querySelector('li'); 
            listItem.addEventListener('click', function() {
                itemList.onSelect(item);
        });

        // if(fruitList.onOrder) {
        //     LISTiTEM.CLASSlIST.ADD('ORDER');
        //     const buttonsContainer = dom.querySelector('.order-buttons');
        //     buttonsContainer.classList.remove('hidden');
        
        //     const
        // }


        
        // const buttonRemove = dom.querySelector('button');
        // buttonRemove.addEventListener('click', function() {
            // itemList.onRemove(item);
        });

        if(itemList)


        list.appendChild(dom);
    },

    // taken out when the commented out section x1 up was added
    //  remove(index) {
        // list.querySelectorAll('li')[index].remove();
    // }
    // Marty 11-5 lecture, replaced all onSelect with onIncrement
    // (ctrl+f) replaced all onRemove with onDecrement
};

export default itemList;