//A way to handle like write or read large amount of data
import { createReadStream } from "fs";

//const stream = createReadStream("./data.txt",{highWaterMark: 90000})

const stream = createReadStream("./data.txt",{encoding: 'utf8'});

stream.on('data',(data) => {
  console.log(data);
})