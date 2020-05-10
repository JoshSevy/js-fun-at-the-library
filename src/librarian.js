class Librarian {
  // create a name, library
  constructor(name, library) {
    this.name = name;
    this.library = library;


  }

// create class method/function to greetPatron
  greetPatron(name, morning){
    //conditional statement to greet if morning
    if(!morning){
      return `Hello, ${name}!`;
    } else {
      return `Good morning, ${name}!`;
    }
  }



// go through and get this method to work correctly
  findBook(title) {
    //need to find way to access shelf ??? can I call in a function
    if(title === 'The Fifth Season'){

      //remove book from fantasy shelf ??? how to access from class
      //return it stock message
      return `Yes, we have ${title}`;
    //else return not in stock message
  }
  return `Sorry, we do not have ${title}`;
}











}

module.exports = Librarian;
