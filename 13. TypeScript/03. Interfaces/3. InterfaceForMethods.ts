interface Perso {
  firstName: string;
  lastName: string;
  age: number;
  sayHello(): void;
}

function greet(person:Perso) {
  console.log("Hello " + person.firstName + " " + person.lastName);
}

const john: Perso = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  sayHello() {
    console.log("Hi there!");
  }
};

const huxn: Perso = {
  firstName: "HuXn",
  lastName: "WebDev",
  age: 18,
  sayHello() {
    console.log("What's good");
  },
};

greet(john);
greet(huxn);


interface Song {
  songName: string;
  singerName?: string;
  printSongInfo(songName: string, singerName: string): string;
}

const song1: Song = {
  songName: "Holiday",
  singerName: "KSI",
  printSongInfo: (songName, singerName) => {
    return `Song: (${songName}) Singer: (${singerName})`;
  },
};

console.log(song1.printSongInfo("Hoiliday", "KSI"));