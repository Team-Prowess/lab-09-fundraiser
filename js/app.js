import addItem from './components/add-item.js';
import itemList from './components/products-list.js';
import itemsApi from './components/products-api.js';

const items = itemsApi.getAll();

itemList.init(items, /*onSelect*/ function(item) {
    const index = itemsApi.add(item);
    itemList.add(index);
});

addItem.init(function(item) {
    itemsApi.add(item);
    itemList.add(item);
});



