export function twoSum(num: number[], target: number) {
  let newArr: number[][] = [];
  for (let i = 0; i < num.length; i++) {
    for (let j = i + 1; j < num.length; j++) {
      const s = num[j] + num[i];
      // console.log(s, target);
      if (s == target) {
        newArr.push([i, j]);
      }
    }
  }
  return newArr.length > 0 ? newArr : "there is not any ";
}

export function twosumv2(num: number[], target: number) {
  const pairs: number[][] = [];
  const numMap: { [key: number]: number } = {};
  for (let i = 0; i < num.length; i++) {
    const complement = target - num[i];
    // //   if(compliment == )
    // // arr.push(compliment);
    // const s = [numMap[complement], i];
    if (numMap[complement] !== undefined) {
      pairs.push([numMap[complement], i]);
    }
    numMap[num[i]] = i;
  }
  return pairs;
}
