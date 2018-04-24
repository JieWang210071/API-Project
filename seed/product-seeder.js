var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect(process.env.DB);

var products = [
    new Product({
        imagePath: "https://images10.newegg.com/NeweggImage/ProductImageCompressAll1280/24-009-642-01.jpg",
        title: "Acer GN246HL Black 24\" Gaming Monitors",
        description: "1920 x 1080\n" +
        "100,000,000:1, 1ms, 144 Hz\n" +
        "D-Sub, DVI, HDMI\n" +
        "Wall-mount capability",
        price: 196.69
    }),

    new Product({
        imagePath: "https://images10.newegg.com/NeweggImage/ProductImageCompressAll1280/20-164-028-V01.jpg",
        title: "Ballistix Sport LT 8GB Kit (4GBx2) DDR4 2666",
        description: "DDR4 2666 (PC4 21300)\n" +
        "Timing 16-18-18\n" +
        "CAS Latency 16\n" +
        "Voltage 1.2V",
        price: 103.99
    }),

    new Product({
        imagePath: "https://images10.newegg.com/NeweggImage/ProductImageCompressAll1280/19-117-795-S05.jpg",
        title: "Intel Core i9-7900X Skylake-X 10-Core 3.3 GHz",
        description: "For A Great VR Experience\n" +
        "Intel Turbo Boost Max 3.0 Technology\n" +
        "10 Cores 20 Threads\n" +
        "Supported Memory: DDR4-2666\n" +
        "Socket LGA 2066\n" +
        "13.75MB L3 Cache",
        price: 921.99
    }),
];

var done = 0;
for (var i = 0; i < products.length; i++){
    products[i].save(function (err, result) {
        done++;
        if (done === products.length){
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}

