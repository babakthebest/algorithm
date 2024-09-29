import addTwoNumber from "./src/addTwoNumber";
import { Anagram } from "./src/angaram";
import { duplicateInt } from "./src/DuplicateInteger";
import { measurePerformance } from "./src/libs/prefm";
import { twoSum, twosumv2 } from "./src/twoSum";

function main() {
  // const num = [1, 4, 5, 11, 2],
  //   target = 6;
  // const num = Array.from({ length: 10000 }, (_, i) => i + 1);
  // const target = 19999;
  // measurePerformance(() => twoSum(num, target), "twoSum");
  // measurePerformance(() => twosumv2(num, target), "twosumv2");
  // measurePerformance(() => addTwoNumber(), "addtwo number");
  /////////////////////////////////////////////////////////////////////////////////////////
  // const arr = [1, 2, 3, 4, 5, 5];
  // const duplicateInteger = new duplicateInt(arr);
  // measurePerformance(() => duplicateInteger.withSort(), "withSort");
  // measurePerformance(() => duplicateInteger.withTwofor(), "withTwofor");
  // measurePerformance(() => duplicateInteger.withset(), "withset");
  /////////////////////////////////////////////////////////////////////////////////////////
  // const t = "race",
  //   s = "arecs";
  // const myanagram = new Anagram(t, s);
  // measurePerformance(() => myanagram.withJoin(), "withJoin");
}
main();
// twoSum(num, target);
