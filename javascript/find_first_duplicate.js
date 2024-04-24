function findFirstDuplicate(arr) {
  // type your code here
  // for each element run through the array looking for duplicates- if any are found, break and store index of duplicate in placeholder if index is lower than current placeholder and store value
  // return stored value (default to negative 1)
  let dup_value = -1
  let dup_index = arr.length

  for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++){
      if (arr[j] === arr[i] && j < dup_index) {
        dup_value = arr[i]
        dup_index = j
      }
    }
  }

  return dup_value

}

if (require.main === module) {
  // add your own tests in here

  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 3, 3, 2]));

  console.log("");

  console.log("Expecting: 2");
  console.log("=>", findFirstDuplicate([2, 2, 3, 3, 2]));

  console.log("");


  

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution
