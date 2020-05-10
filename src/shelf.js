function shelfBook(bookObj, shelfArr) {
 // push book to array  *used unshift to avoid error double check if this is best for this.
     // shelf can only hold  3 books remove caseys book  shift or pop
         // if shelf.length  <  3 unshift  else shelf.shift
 if (shelfArr.length < 3) {
   return shelfArr.unshift(bookObj);
 }
};


// remove a specific value from array, name from object title
  // need the index of argument and remove that element
    // conditional statement to return array w/out book.
function unshelfBook(str, shelfArr) {
  for (var i = 0; i < shelfArr.length; i++){
    if(shelfArr[i].title === str) {
      return shelfArr.splice(i, 1);
    }
  }
};
// pass in array, iterate over array
  // access titles in object return that value in array.
function listTitles(book) {
  return `${book[0].title}, ${book[1].title}, ${book[2].title}`;
};


// iterate over array
  // if on shelf return true else return false

function searchShelf(arr, str) {
  for(var i = 0; i < arr.length; i++) {
    if(str === arr[i].title){
      return true;
      // problem trying to us else in scope always returned false for second element in array
    }
  }
  // all else return false
  return false;
}




module.exports = {
  shelfBook: shelfBook,
  unshelfBook: unshelfBook,
  listTitles: listTitles,
  searchShelf: searchShelf
};
