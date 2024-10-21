export default function CanPlaceFlowers(arr: number[], n: number) {
  let indexmap: { [key: number]: number[] } = {
    0: [],
    1: [],
  };
  let indexmap2: { [key: number]: number[] } = {
    0: [],
    1: [],
  };
  let maxFlower = 0;
  arr.forEach((value, index) => {
    indexmap[value].push(index);
  });
  for (let i = 0; i < indexmap["0"].length; i++) {
    if (indexmap["0"][i + 1] == i + 1) {
      maxFlower++;
    }
  }

  for (const [index, value] of arr.entries()) {
    indexmap2[value].push(index);
  }
  console.log("indexmap:", indexmap);
  //   console.log("indexmap2:", indexmap2);
  console.log("maxFlower:", maxFlower);
}

function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let count = 0;

  for (let i = 0; i < flowerbed.length; i++) {
    if (
      flowerbed[i] === 0 &&
      (i === 0 || flowerbed[i - 1] === 0) &&
      (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)
    ) {
      flowerbed[i] = 1;
      count++;
      if (count >= n) {
        return true;
      }
    }
  }

  return count >= n;
}
