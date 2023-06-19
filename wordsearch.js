//return false if empty array
const wordSearch = (letters, word) => {
  if (letters.length === 0) {
    return false;
  }
  //join letters together
  const horizontalJoin = letters.map(ls => ls.join(''));
  const verticalJoin = transpose(letters).map(ls => ls.join(''));

  //check if string includes word
  for (let item of horizontalJoin) {
    if (item.includes(word)) {
      return true;
    }
  }
  for (let item of verticalJoin) {
    if (item.includes(word)) {
      return true;
    }
  }
  return false;

};
//transpose matrix rows and columns switch
const transpose = (letters) => {
  const rowLength = letters[0].length;
  const columnLength = letters.length;
  const newArr = [];

  for (let item of letters[0]) {
    newArr.push([]);
  }
  for (let i = 0; i < columnLength; i++) {
    for (let j = 0; j < rowLength; j++) {
      newArr[j][i] = letters[i][j];
    }
  }
  return newArr;
};

module.exports = wordSearch;