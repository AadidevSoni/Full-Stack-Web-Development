"use strict";
const movie2 = {
    name: "John Wick",
    ratings: 7,
    printMovieInfo(name, price, ratings) {
        return `Name: ${name}, Price: ${price}, Ratings: ${ratings}`;
    },
    genra: "Action",
};
const res5 = movie2.printMovieInfo("John Wick", 100, 8);
console.log(res5);
