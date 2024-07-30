import React, { useState } from "react";
import "./App.css";
import Store from "./Store";
import { Address, Restaurant } from "./model/restaurant";
let data: Restaurant = {
    name: "daseul",
    category: "western",
    address: {
        city: "sinsa",
        detail: "somewhere",
        zipCode: 23425634,
    },
    menu: [
        {
            name: "rose pasta",
            price: 2000,
            category: "PASTA",
        },
        {
            name: "garic steak",
            price: 5000,
            category: "STEAK",
        },
        {
            name: "tomato pasta",
            price: 2000,
            category: "PASTA",
        },
    ],
};

const App: React.FC = () => {
    const [myrestaurant, setMyRestaurant] = useState<Restaurant>(data);

    const changeAddress = (address: Address) => {
        setMyRestaurant({ ...myrestaurant, address: address });
    };

    return (
        <div className="App">
            <Store data={myrestaurant} changeAddress={changeAddress} />
            {/* <BestMenu /> */}
        </div>
    );
};

export default App;
