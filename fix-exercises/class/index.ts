class Personagem {
  name: string;
  height: number;
  weight: number;

  constructor(n: string, h: number, w: number) {
    console.log(`Criando pessoa de nome: ${n}`);
    this.name = n;
    this.height = h;
    this.weight = w;
  }

  sleep() {
    console.log(`${this.name}: zzzzz`);
  }
}

const person1 = new Personagem('Thomas', 180, 60);
const person2 = new Personagem('José', 180, 57);
console.log(person1.name, person1.height, person1.weight);
console.log(person2.name, person2.height, person2.weight);
person1.sleep();
person2.sleep();