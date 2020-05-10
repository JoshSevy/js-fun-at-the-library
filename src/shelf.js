function shelfBook(bookObj, shelfArr) {
 if (shelfArr.length < 3) {
   return shelfArr.unshift(bookObj);
 }
};

function unshelfBook(str, shelfArr) {
  for (var i = 0; i < shelfArr.length; i++){
    if(shelfArr[i].title === str) {
      return shelfArr.splice(i, 1);
    }
  }
};

function listTitles(book) {
  return `${book[0].title}, ${book[1].title}, ${book[2].title}`;
};

function searchShelf(arr, str) {
  for(var i = 0; i < arr.length; i++) {
    if(str === arr[i].title){
      return true;
    }
  }
  return false;
}

module.exports = {
  shelfBook: shelfBook,
  unshelfBook: unshelfBook,
  listTitles: listTitles,
  searchShelf: searchShelf
};
