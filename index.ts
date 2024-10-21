import addTwoNumber from "./src/addTwoNumber";
import { Anagram } from "./src/angaram";
import longestCommonPrefix from "./src/longestCommonPrefix";
import { duplicateInt } from "./src/DuplicateInteger";
import { measurePerformance } from "./src/libs/prefm";
import { twoSum, twosumv2 } from "./src/twoSum";
import { Fibo } from "./src/fibo";
import finduniqueEmails from "./src/uniqueEmail";
import CanPlaceFlowers from "./src/CanPlaceFlowers";

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
  // const arr = ["flower", "flow", "flight"];
  // const arr2 = ["a"];
  // measurePerformance(() => longestCommonPrefix(arr2), "withJoin");
  // const tsetobj = { key1: "bob", key2: "hes", key3: "hi" };
  // const fibo = new Fibo(10);
  // // measurePerformance(() => func.printObj(tsetobj), "test");
  // measurePerformance(() => fibo.answer(), "fibo");
  // measurePerformance(() => fibo.answerArray(), "fibo");
  // measurePerformance(() => fibo.recursive(), "fibo");
  // finduniqueEmails();
  const arr = [0, 0, 0, 0, 0, 1];
  const n = 2;
  CanPlaceFlowers(arr, n);
}
main();
// twoSum(num, target);
