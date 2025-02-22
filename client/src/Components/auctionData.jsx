import laptop from "./Assests/laptop.jpg";
import router from "./Assests/router.jpg";
import fridge from "./Assests/fridge.jpg";
import smartphone from "./Assests/smartphone.jpg";

const auctions = [
  {
    image: laptop,
    productName: "Laptop",
    bid: "₨.100",
    endTime: Date.now() + 165 * 24 * 60 * 60 * 1000,
  },
  {
    image: smartphone,
    productName: "Smartphone",
    bid: "₨.150",
    endTime: Date.now() + 170 * 24 * 60 * 60 * 1000,
  },
  {
    image: fridge,
    productName: "Fridge",
    bid: "₨.120",
    endTime: Date.now() + 167 * 24 * 60 * 60 * 1000,
  },
  {
    image: router,
    productName: "Router",
    bid: "₨.80",
    endTime: Date.now() + 161 * 24 * 60 * 60 * 1000,
  },
  
];

export default auctions;
