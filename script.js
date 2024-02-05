class Transport {
    constructor(price, brand, image, type) {
        this.price = price;
        this.brand = brand;
        this.image = image;
        this.type = type;
    }
    getInfo() {
        return `<p>Type: ${this.type}, brand: ${this.brand} <p/> <img src='${this.image}' >`;
    }
    getPrice() {
        return `<p>Price: ${this.price}<p/>`;
    }
}

class Car extends Transport {
    constructor(price, brand, image, doors) {
        super(price, brand, image);
        this.type = "car";
        this.doors = doors;
    }
    getDoorsCount() {
        return `<p>Doors: ${this.doors}<p/>`;
    }
}

class Bike extends Transport {
    constructor(price, brand, image, maxSpeed) {
        super(price, brand, image);
        this.type = "bike";
        this.maxSpeed = maxSpeed;
    }
    getMaxSpeed() {
        return `<p>MaxSpeed: ${this.maxSpeed}<p/>`;
    }
}

const data = [
    {
        id: 1,
        type: "car",
        brand: "Audi",
        doors: 4,
        price: 4300000,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg",
    },
    {
        id: 2,
        type: "car",
        brand: "Mercedes-Benz",
        doors: 4,
        price: 2800000,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg",
    },
    {
        id: 3,
        type: "bike",
        brand: "Harley-Davidson",
        maxSpeed: 210,
        price: 1300000,
        image: "https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg",
    },
    {
        id: 4,
        type: "bike",
        brand: "Harley-Davidson",
        maxSpeed: 220,
        price: 1400000,
        image: "https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png",
    },
];
const container = document.getElementById("container");
let newHtml = "";

data.forEach(function (vehicle) {
    if (vehicle.type === "car") {
        let newCar = new Car(vehicle.price, vehicle.brand, vehicle.image, vehicle.doors);
        newHtml = newHtml + newCar.getInfo() + newCar.getPrice() + newCar.getDoorsCount();
    } else if (vehicle.type === "bike") {
        let newBike = new Bike(vehicle.price, vehicle.brand, vehicle.image, vehicle.maxSpeed);
        newHtml = newHtml + newBike.getInfo() + newBike.getPrice() + newBike.getMaxSpeed();
    }
});

container.innerHTML = newHtml;
