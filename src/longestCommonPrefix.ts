export default function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return "";
  let ans = "";
  for (let i = 0; i < strs[0].length + 1; i++) {
    let looking_for = strs[0].slice(0, i + 1);
    const slice1 = strs.slice(1);
    for (const s of slice1) {
      const finded = s.slice(0, i + 1);
      if (finded != looking_for) {
        return ans;
      }
    }
    ans = looking_for;
  }
  return ans;
}
