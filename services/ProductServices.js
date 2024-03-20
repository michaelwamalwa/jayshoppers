const PRODUCTS = [
    {
        id: 1,
        name:"Excavator",
        price: 3800000,
        image: require("../assets/excavator.jpg"),
        description: "Excavator"
    },
    {
    id: 2,
    name:"Backhoe-Loader",
    price: 14800000,
    image: require("../assets/backhoeloader.jpg"),
    description: "Excavator"
},
{
id: 3,
name:"Crane",
price: 3800000,
image: require("../assets/crane.jpg"),
description: "Excavator"
}
,
{
    id: 4,
    name:"Crawlwer-Loader",
    price: 3800000,
    image: require("../assets/crawler-loader.jpg"),
    description: "Excavator"
},
{
    id: 5,
    name:"Dumper",
    price: 3800000,
    image: require("../assets/dum.jpg"),
    description: "Excavator"
},
{
    id: 6,
    name:"Mixer",
    price: 3800000,
    image: require("../assets/mixer.jpg"),
    description: "Excavator"
},

{
    id: 7,
    name:"Trencher",
    price: 3800000,
    image: require("../assets/trencher.jpg"),
    description: "Excavator"
},

]

export function getProducts() {
    return PRODUCTS;
}
export function getProduct(id) {
    return PRODUCTS.find((product) => product.id == id);
}