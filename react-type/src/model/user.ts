type Scroe = "A" | "B" | "C" | "F";

export interface User {
    name: string;
    age: number;
    gender?: string;
    readonly birthYear: number;
    [grade: number]: Scroe;
}

export interface Add {
    (num1: number, num2: number): number;
}

export interface IsAdult {
    (age: number): boolean;
}

export interface Car {
    color: string;
    wheels: number;
    start(): void;
}

interface Benz extends Car {
    door: number;
    stop(): void;
}

const benz: Benz = {
    door: 4,
    stop() {
        console.log("....Stop");
    },
    color: "red",
    wheels: 4,
    start() {
        console.log("...go");
    },
};

class Bmw implements Car {
    color;
    wheels = 4;
    constructor(c: string) {
        this.color = c;
    }
    start() {
        console.log("...go");
    }
}

const b = new Bmw("green");
