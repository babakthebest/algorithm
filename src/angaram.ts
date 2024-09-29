export class Anagram {
  private s: string;
  private t: string;
  constructor(s: string, t: string) {
    this.s = s;
    this.t = t;
  }

  public withJoin() {
    const splitedS = this.s.split("").sort().join();
    const splitedt = this.t.split("").sort().join();
    return splitedS === splitedt;
  }
}
