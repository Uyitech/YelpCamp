const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');

mongoose.connect('mongodb://0.0.0.0:27017/yelp-camp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});


const sample = array => array[Math.floor(Math.random() * array.length)];


const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 200; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            author: '62e951b7610ba763aef53c0d',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            image: 'http://source.unsplash.com/collection/483251',
            description: 'Lorem ipsum dolor sit ament consectetur adipisicing elite.Molesting in facings praesentium antique, provident earum architecture et minima doloremque commodus mulla corporals anime quae repellat iste illo neume reiciendis labrum!',
            price,
            geometry: {
                type: "Point",
                coordinates: [
                    cities[random1000].longitude,
                    cities[random1000].latitude,
                ]
            },
            images: [
                {
                    url: 'https://res.cloudinary.com/thankgod222/image/upload/v1659824754/Yelpcamp%20V2/emy6tml5tok72ntllhwy.png',
                    filename: 'Yelpcamp V2/emy6tml5tok72pillowy',
                },
                {
                    url: 'https://res.cloudinary.com/thankgod222/image/upload/v1659824754/Yelpcamp%20V2/ypveofoosvrb7kbtgeqv.jpg',
                    filename: 'Yelpcamp V2/ypveofoosvrb7kbtgeqv',
                }
            ]
        })
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})