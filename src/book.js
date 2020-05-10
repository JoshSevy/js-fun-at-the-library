function createTitle(title) {
  return `The ${title}`;
};

function buildMainCharacter(name, age, pronouns) {
   return {
    name: name,
    age: age,
    pronouns: pronouns
  };
};

function saveReview(str, reviews) {
  if (!reviews.includes(str)) {
    return reviews.push(str);
  }
};

function calculatePageCount(title) {
  return title.length * 20;
};

function writeBook(title, mainCharacter, genre) {
     return {
       title: title,
       mainCharacter: mainCharacter,
       pageCount: calculatePageCount(title),
       genre: genre
     }
}

function editBook(book) {
return book.pageCount *= .75;
}

module.exports = {
  createTitle: createTitle,
  buildMainCharacter: buildMainCharacter,
  saveReview: saveReview,
  calculatePageCount: calculatePageCount,
  writeBook: writeBook,
  editBook: editBook
}
