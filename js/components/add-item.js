// const form = document.getElementById('products-form');
const image = document.getElementById('image');
const item = document.getElementById('item');
const description = document.getElementById('description');
const price = document.getElementById('price');

const addItem = {
    init(onAdd) {
        const form = document.getElementById('add-form');
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const elements = form.elements;

            const listItems = {
            
                image: elements.image.value,
                item: elements.item.value,
                description: elements.description.value,
                price: elements.price.value

                // Marty added parse to price
                // image: elements.image.value,
                // item: elements.item.value,
                // description: elements.description.value,
                // price: parseInt(elements.price.value)
            };

            onAdd(listItems);

            form.reset();
        });
    }
};
export default addItem;