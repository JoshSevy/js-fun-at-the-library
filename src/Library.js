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
  if(book.genre === "fantasy") {
    return library.shelves.fantasy.push(book);
  } else if (book.genre === 'fiction') {
    return library.shelves.fiction.push(book);
  } else {
    return library.shelves.nonFiction.push(book);
  }
};

function checkoutBook(library, book) {
  var checkout = `You have now checked out ${book} from the ${library.name}`;
  for(var i = 0; i < library.shelves.fiction.length; i++) {
    if (book === library.shelves.fiction[i].title) {
      library.shelves.fiction.pop();
      return checkout;
      }
    }

  for(var i = 0; i < library.shelves.fantasy.length; i++) {
    if (book === library.shelves.fantasy[i].title) {
      library.shelves.fantasy.pop();
      return checkout;
      }
    }

  for(var i = 0; i < library.shelves.nonFiction.length; i++) {
    if (book === library.shelves.nonFiction[i].title) {
      library.shelves.nonFiction.pop();
      return checkout;
      }
    }
    return `Sorry, there are currently no copies of ${book} available at the ${library.name}`;
 };

module.exports = {
  createLibrary: createLibrary,
  addBook: addBook,
  checkoutBook: checkoutBook
};
