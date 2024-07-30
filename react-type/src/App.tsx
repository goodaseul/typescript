import React, { useState } from "react";
import "./App.css";
import Store from "./Store";
import { Address, Restaurant } from "./model/restaurant";
import { User, Add, IsAdult } from "./model/user";

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

let user: User = {
    name: "daseul",
    age: 28,
    birthYear: 1997,
    1: "A",
    2: "B",
};

const App: React.FC = () => {
    const [myrestaurant, setMyRestaurant] = useState<Restaurant>(data);

    const [myUser, setMyUser] = useState<User>(user);

    const changeAddress = (address: Address) => {
        setMyRestaurant({ ...myrestaurant, address: address });
    };

    const add: Add = (x, y) => {
        return x + y;
    };

    const checkAge: IsAdult = (age) => {
        return age > 19;
    };

    return (
        <div className="App">
            <Store data={myrestaurant} changeAddress={changeAddress} />
            <p>이름: {myUser.name}</p>
            <p>나이: {myUser.age}</p>
            <p>생년: {myUser.birthYear}</p>
            <p>Add 함수 값: {add(10, 20)}</p>
            <p>checkAge 함수 값 : {checkAge(21)}</p>
        </div>
    );
};

export default App;
