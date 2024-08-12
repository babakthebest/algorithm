import { measurePerformance } from "./src/libs/prefm";
import { twoSum, twosumv2 } from "./src/twoSum";

function main() {
  // const num = [1, 4, 5, 11, 2],
  //   target = 6;
  const num = Array.from({ length: 10000 }, (_, i) => i + 1);
  const target = 19999;
  measurePerformance(() => twoSum(num, target), "twoSum");
  measurePerformance(() => twosumv2(num, target), "twosumv2");
}
main();
// twoSum(num, target);
