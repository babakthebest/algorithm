const arr = ["a.b@g.c"];
export default function finduniqueEmails() {
  const arr2 = arr[0].split("@");
  for (const el of arr2) {
    if (el.includes(".")) {
      console.log(el.includes("."));
    }
  }
}
