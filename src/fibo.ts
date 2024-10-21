export class Fibo {
  private n: number;
  constructor(n: number) {
    this.n = n;
  }
  public printObj(obj: { [key: string]: string }) {
    console.log(Object.keys(obj));
    console.log(Object.values(obj));
    console.log(Object.entries(obj));
  }

  public answer() {
    let fib: number[] = [0, 1];
    for (let i = 2; i <= this.n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib[this.n];
  }
  public answerArray() {
    let fib: number[] = [0, 1];
    for (let i = 2; i <= this.n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
  }
  public recursive(n: number = this.n): number {
    if (n <= 1) {
      return n;
    }
    return this.recursive(n - 1) + this.recursive(n - 2);
  }
}
