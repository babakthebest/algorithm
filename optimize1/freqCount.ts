import fs from "fs";
import path from "path";
import { freqCountLarge } from "./freqCountLarge";
function freqCount(top: number) {
  console.time();
  const filePath = path.join(process.cwd(), "test.txt");
  const output = path.join(process.cwd(), "output.txt");
  const data = fs.readFileSync(filePath, "utf-8");
  const countwords = new Map<string, number>();
  data.split(/\s+/).forEach((i) => {
    countwords.set(i, (countwords.get(i) || 0) + 1);
  });
  const array = Array.from(countwords.entries()).sort((a, b) => b[1] - a[1]);
  fs.writeFileSync(output, JSON.stringify(array.slice(0, top)));
  console.log(array.slice(0, top));
  console.timeEnd();
}

console.time();
// freqCount(10);
freqCountLarge(10);

console.timeEnd();
