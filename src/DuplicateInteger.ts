export class duplicateInt {
  private arr: number[];
  constructor(arr: number[]) {
    this.arr = arr;
  }
  public withSort() {
    const soretedarr = this.arr.sort((a, b) => a - b);
    for (let i = 0; i < this.arr.length; i++) {
      //   console.log(soretedarr[i], soretedarr[i + 1]);
      if (soretedarr[i] == soretedarr[i + 1]) return true;
    }
    return false;
  }
  public withTwofor() {
    for (let i = 0; i < this.arr.length; i++) {
      for (let j = i + 1; j < this.arr.length; j++) {
        // console.log(this.arr[i], this.arr[j]);
        if (this.arr[i] == this.arr[j]) return true;
      }
    }
    return false;
  }
  public withset() {
    const s = new Set(this.arr);
    return s.size !== this.arr.length;
  }
}
