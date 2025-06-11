"use strict";
function greet(person) {
    console.log("Hello " + person.firstName + " " + person.lastName);
}
const john = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    sayHello() {
        console.log("Hi there!");
    }
};
const huxn = {
    firstName: "HuXn",
    lastName: "WebDev",
    age: 18,
    sayHello() {
        console.log("What's good");
    },
};
greet(john);
greet(huxn);
const song1 = {
    songName: "Holiday",
    singerName: "KSI",
    printSongInfo: (songName, singerName) => {
        return `Song: (${songName}) Singer: (${singerName})`;
    },
};
console.log(song1.printSongInfo("Hoiliday", "KSI"));
