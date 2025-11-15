// Tipos básicos

let age: number = 5;
const nome: string = "Denisander";
const isvalid: boolean = true;
let qualquercoisa: any = 5;
const lista: number[] = [1, 2, 3, 4, 5];
const booleanos: boolean[] = [true, false, true, false];
const apelidos: string[] = ["Denis", "Ana", "Geani", "Jéssica"];
const person: [number, string] = [38, "Denis"];

const people: [number, string][] = [
  [38, "Denis"],
  [61, "Ana"]
]

// funções
const soma = (x: number, y: number) => {
  return x + y;
};

const log = (message: string): void => {
  console.log(message);
};


