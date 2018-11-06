let items = [
    {
        image: '../assets/1939Ensemble.jpg',
        name: '1939 Ensemble, Cymbal',
        description: 'Mersey Beat 18" Crash/Ride Cymbal & Gong from Revival Drum Shop, donated by 1939 Ensemble',
        price: '400'
    },
    {
        image: '../assets/tronFrisbee.jpg',
        name: 'Cari Pizza, Tron Frisbee',
        description: 'Tron Frisbee autographed by Cari Palazzolo',
        price: '45'
    },
    {
        image: '../assets/DrugTruck.jpg',
        name: 'Drug Truck, Free Drum Lesson',
        description: 'One drum lesson with Drug Trucks Dave Coniglio',
        price: '150'
    },
    {
        image: '../assets/Genders.jpg',
        name: 'Genders, T-Shirt',
        description: 'Romulus and Remus Tee from Genders',
        price: '40'
    },
    {
        image: '../assets/Gaythiest.jpg',
        name: 'Gaytheist, Split LP',
        description: 'Gaythiest + Rabbits 12" vinyl split LP, Gay*Bits, autographed by Jason Rivera',
        price: '75'
    },
    {
        image: '../assets/HaleyHendrickx.jpg',
        name: 'Haley Hendrickx, I Need to Start a Garden CD',
        description: 'Haley Hendrickx album, "I Need to Start a Garden" on CD',
        price: '30'
    },
    {
        image: '../assets/Cari.jpg',
        name: 'Houndstooth, Autographed Poster',
        description: '2015 UK "End Of The Road Festival" poster signed by members of Houndstooth',
        price: '135'
    },
    {
        image: '../assets/RedFang.jpg',
        name: 'Red Fang, Beer Koozie',
        description: 'Red Fang Beer Koozie',
        price: '35'
    },
    {
        image: '../assets/SadDad.jpg',
        name: 'Sad Dad, Stickers',
        description: 'Stickers from Sad Dad',
        price: '20'
    },
    {
        image: '../assets/sleep.jpg',
        name: 'Sleep, Patch Jacket',
        description: 'Denim Patch Jacket donated by Sleep',
        price: '125'
    },
    {
        image: '../assets/SummerCannibals.jpg',
        name: 'Summer Cannibals, Bandana',
        description: 'Summer Cannibals Turkey Skull Bandana',
        price: '25'
    },
    {
        image: '../assets/torgazi.jpg',
        name: 'Torgazi, Enamel Pin Set',
        description: 'Enamel Pin Set from Torgazi',
        price: '50'
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
    remove(item) {
        const index = items.indexOf(item);
        if(index !== -1) {
            items.splice(index, 1);
            saveItems();
            return index;
        }
    }  
};

export default itemsApi;