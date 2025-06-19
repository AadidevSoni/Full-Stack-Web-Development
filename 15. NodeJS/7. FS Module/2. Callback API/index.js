import * as fs from "fs"

//We dont need try catch, instead we use callback funmctions

/*
fs.mkdir('/Users/aadidev/Desktop/sprites/promises',(error) => {
  if(error) throw error;
  console.log('Directory created..');
});
*/ 
fs.mkdir('/Users/aadidev/Desktop/sprites/promises', function(error) {
  if(error) throw error;
  console.log('Directory created..');
});