const isPalindrome = str => {
  str = str.toLowerCase();
  let charactersArr = str.split('');
  let validCharacters = 'abcdefghijklmnopqrstvuwxyz'.split('');
  let lettersArr = [];

  charactersArr.forEach(character => {
    if (validCharacters.indexOf(character) > -1)
      lettersArr.push(character);
  });

  if (lettersArr.join('') === lettersArr.reverse().join('')) return true;
  else return false;

}

console.log(isPalindrome("Madam I'm Adam"));
console.log(isPalindrome("abcdef"));
console.log(isPalindrome("racecar"));
