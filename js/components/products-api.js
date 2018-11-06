let items = [
    {
        <li>
            <img src="../../assets/${item.image ? item.image : '1939Ensemble.jpg'}">
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
        
    //     image: '../assets/1939Ensemble.jpg',
    //     item: '1939 Ensemble, Cymbal',
    //     Description: 'Mersey Beat 18" Crash/Ride Cymbal & Gong from Revival Drum Shop, donated by 1939 Ensemble',
    //     Price: '400'
    // },
    // {
    //     image: '../assets/tronFrisbee.jpg',
    //     item: 'Cari Pizza, Tron Frisbee',
    //     Description: 'Tron Frisbee autographed by Cari Palazzolo',
    //     Price: '45'
    // },
    // {
    //     image: '../assets/DrugTruck.jpg',
    //     item: 'Drug Truck, Free Drum Lesson',
    //     Description: 'One drum lesson with Drug Trucks Dave Coniglio',
    //     Price: '150'
    // },
    // {
    //     image: '../assets/Genders.jpg',
    //     item: 'Genders, T-Shirt',
    //     Description: 'Rom..ulus and Remus Tee from Genders',
    //     Price: '40'
    // },
    // {
    //     image: '../assets/Gaythiest.jpg',
    //     item: 'Gaytheist, Split LP',
    //     Description: 'Gaythiest + Rabbits 12" vinyl split LP, Gay*Bits, autographed by Jason Rivera',
    //     Price: '75'
    // },
    // {
    //     image: '../assets/HaleyHendrickx.jpg',
    //     item: 'Haley Hendrickx, I Need to Start a Garden CD',
    //     Description: 'Haley Hendrickx album, "I Need to Start a Garden" on CD',
    //     Price: '30'
    // },
    // {
    //     image: '../assets/Cari.jpg',
    //     item: 'Houndstooth, Autographed Poster',
    //     Description: '2015 UK "End Of The Road Festival" poster signed by members of Houndstooth',
    //     Price: '135'
    // },
    // {
    //     image: '../assets/RedFang.jpg',
    //     item: 'Red Fang, Beer Koozie',
    //     Description: 'Red Fang Beer Koozie',
    //     Price: '35'
    // },
    // {
    //     image: '../assets/SadDad.jpg',
    //     item: 'Sad Dad, Stickers',
    //     Description: 'Stickers from Sad Dad',
    //     Price: '20'
    // },
    // {
    //     image: '../assets/sleep.jpg',
    //     item: 'Sleep, Patch Jacket',
    //     Description: 'Denim Patch Jacket donated by Sleep',
    //     Price: '125'
    // },
    // {
    //     image: '../assets/SummerCannibals.jpg',
    //     item: 'Summer Cannibals, Bandana',
    //     Description: 'Summer Cannibals Turkey Skull Bandana',
    //     Price: '25'
    // },
    // {
    //     image: '../assets/torgazi.jpg',
    //     item: 'Torgazi, Enamel Pin Set',
    //     Description: 'Meriwether Enamel Pin Set',
    //     Price: '50'
    },
];

function saveItems() {
    localStorage.setItem('items', JSON.stringify(items));
}

const itemsApi = {
    getAll() {
        const json = localStorage.getItem('items');
        if(json){
            items = JSON.parse(json);
        }
        return items;
    },
    add(item) {
        items.push(item);
        saveItems();
    },
    // remove(item) {
    //     const index = items.indexOf(item);
    //     if(index !== -1) {
    //         items.splice(index, 1);
    //         saveItems();
    //         return index;
    //     }
    // }  
};

export default itemsApi;