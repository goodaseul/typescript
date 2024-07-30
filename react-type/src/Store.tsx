import React from "react";
import { Address, Restaurant } from "./model/restaurant";

interface OwnProps {
    data: Restaurant;
    changeAddress(address: Address): void;
    // (type) :  return 값
}

const Store: React.FC<OwnProps> = ({ data }) => {
    return <div>{data.name}</div>;
};

export default Store;
