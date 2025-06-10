interface Computer {
  name: string;
  ram: number;
  hdd: number;
}

const pc:Computer = {
  name: 'i7',
  ram: 8,
  hdd: 100
};

console.log(pc);

interface Movie {
  readonly name: string;  
  ratings: number;
  genra?: string; 
}

const movie1: Movie = {
  name: "John Wick",
  ratings: 7,
  genra: "Action",
};

console.log(movie1);