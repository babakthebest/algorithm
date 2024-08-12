import fs from "fs";
import path from "path";
import { Readable } from "stream";

export function freqCountLarge(top: number) {
  const filePath = path.join(process.cwd(), "test.txt");
  const output = path.join(process.cwd(), "output.txt");

  const countWords = new Map<string, number>();

  const readStream = fs.createReadStream(filePath, { encoding: "utf-8" });
  const writeStream = fs.createWriteStream(output);

  let data = "";

  readStream.on("data", (chunk: string) => {
    data += chunk;
    data = processChunk(data);
  });

  readStream.on("end", () => {
    const array = Array.from(countWords.entries()).sort((a, b) => b[1] - a[1]);
    writeStream.write(JSON.stringify(array.slice(0, top)));
    writeStream.end();
    console.log(array.slice(0, top));
  });

  function processChunk(chunk: string) {
    const words = chunk.split(/\s+/);
    const lastWord = words.pop();
    words.forEach((word) => {
      countWords.set(word, (countWords.get(word) || 0) + 1);
    });
    return lastWord || "";
  }
}
