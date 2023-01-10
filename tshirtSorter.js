// Write your solution below:
function tshirtSorter(string) {
  let sorted = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i].includes("s")) {
      sorted = sorted.concat(string[i]);
    }
  }
  for (let j = 0; j < string.length; j++) {
    if (string[j].includes("m")) {
      sorted = sorted.concat(string[j]);
    }
  }
  for (let k = 0; k < string.length; k++) {
    if (string[k].includes("l")) {
      sorted = sorted.concat(string[k]);
    }
  }

  return sorted;
}

console.log(tshirtSorter("lms"));
console.log(tshirtSorter("smllms"));
