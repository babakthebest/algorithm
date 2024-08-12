class Coder {
  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string = "java"
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }

  public getAge() {
    return ` i am at age ${this.age} `;
  }
}
class Webdev extends Coder {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number
  ) {
    super(name, music, age);
    this.computer = computer;
  }
  public getlang() {
    return ` my programing language is ${this.lang} `;
  }
}
const d = new Webdev("dell", "babak", "socks", 42);
console.log(d.getAge());
console.log(d.getlang());
