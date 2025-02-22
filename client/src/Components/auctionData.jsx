import laptop from "./Assests/laptop.jpg";
import router from "./Assests/router.jpg";
import fridge from "./Assests/fridge.jpg";
import smartphone from "./Assests/smartphone.jpg";

const auctions = [
  {
    id:1,
    image: laptop,
    productName: "Laptop",
    category:"Consumer Electronics",
    bid: "₨.100",
    endTime: Date.now() + 165 * 24 * 60 * 60 * 1000,
  },
  {
    id:2,
    image: smartphone,
    productName: "Smartphone",
    category:"Consumer Electronics",
    bid: "₨.150",
    endTime: Date.now() + 170 * 24 * 60 * 60 * 1000,
  },
  {
    id:3,
    image: fridge,
    productName: "Fridge",
    category:"Home Appliances",
    bid: "₨.120",
    endTime: Date.now() + 167 * 24 * 60 * 60 * 1000,
  },
  {
    id:4,
    image: router,
    productName: "Router",
    category:"Consumer Electronics",
    bid: "₨.80",
    endTime: Date.now() + 161 * 24 * 60 * 60 * 1000,
  },
  {
    id:5,
    image: router,
    productName: "Router",
    category:"Consumer Electronics",
    bid: "₨.20",
    endTime: Date.now() + 161 * 24 * 60 * 60 * 1000,
  },
  {
    id:6,
    image: router,
    productName: "Router",
    category:"Home Appliances",
    bid: "₨.10",
    endTime: Date.now() + 161 * 24 * 60 * 60 * 1000,
  },
  
];

export default auctions;
