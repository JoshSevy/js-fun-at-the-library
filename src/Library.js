// new library needs to take in a name
  //needs to have shelves, genres shelves in nested Object

function createLibrary(name) {
  return {
    name: name,
    shelves: {fantasy:[],
              fiction:[],
              nonFiction:[]
    }
  };
}

function addBook(library, book) {
  var fantasyShelf = library.shelves.fantasy;
  var fictionShelf = library.shelves.fiction;
  var nonFictionShelf = library.shelves.nonFiction;
  // check if book is fantasy if true return push to fantasy array
  if(book.genre === "fantasy") {
    return fantasyShelf.push(book);
    //check if book is fiction if true return push to fiction array
  } else if (book.genre === 'fiction') {
    return fictionShelf.push(book);
      //only 3 selves else to nonFiction return to nonFiction array
  } else {
    return nonFictionShelf.push(book);
  }
        //passing test reformat to make code cleaner
};

// check if each book shelf contians book
  // remove book from shelf log check out message
    // if book not on shelves return not available message
function checkoutBook(library, book) {
  for(var i = 0; i < library.shelves.fiction.length; i++) {
    if (book === library.shelves.fiction[i].title) {
      library.shelves.fiction.pop();
      return `You have now checked out ${book} from the ${library.name}`;
      }
    }
    return `Sorry, there are currently no copies of ${book} available at the ${library.name}`;
 };

module.exports = {
  createLibrary: createLibrary,
  addBook: addBook,
  checkoutBook: checkoutBook
};
