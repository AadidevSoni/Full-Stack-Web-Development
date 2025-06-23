import * as fs from "fs"
//Lets us run our code synchronously
fs.mkdirSync('/Users/aadidev/Desktop/sprites/promises', {recursive: true});

//Remove directory
fs.rmdirSync('/Users/aadidev/Desktop/sprites/promises');