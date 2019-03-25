// O(n + m) - Linear Time Complexity

/*
  - SET VARIABLES
      noteArr
      magazineArr
      magazineObj
      noteIsPossible

  - LOGIC
      Convert Magazine Array to Magazine Object w/ count
      Loop through Note Array and subtract 1 for each word
         If the word does NOT exist or the number becomes < 0 set the flag to false
 */
const harmlessRansomNote = (note, magazine) => {
  let noteArr     = note.split(' ');
  let magazineArr = magazine.split(' ');
  let magazineObj = {};

  magazineArr.forEach(word => {
    if (!magazineObj[word]) magazineObj[word] = 0;
    magazineObj[word]++;
  });

  let noteIsPossible = true;
  noteArr.forEach(word => {
    if (magazineObj[word]) {
      magazineObj[word]--;
      if (magazineObj[word] < 0) noteIsPossible = false;
    } else noteIsPossible = false;
  });

  return noteIsPossible;
}

console.log(harmlessRansomNote(
`this is a secret note for you from a secret admirer`, 
`puerto rico is a place of great wonder and excitement it has many secret waterfall locatoins that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited`));
console.log(harmlessRansomNote(
`this is a secret note for you from a secret admirer`, 
`puerto rico is a place of great wonder and excitement it has many waterfall locatoins that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited`));
