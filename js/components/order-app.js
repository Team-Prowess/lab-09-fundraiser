import itemsApi from './products-api.js';
import itemList from './products-list.js';

const items = itemsApi.getAll();

itemList.init(items, function(item) {

});