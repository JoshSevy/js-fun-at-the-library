class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;
  }

  greetPatron(name, morning){
    if(!morning){
      return `Hello, ${name}!`;
    } else {
      return `Good morning, ${name}!`;
    }
  }

  findBook(title) {
    if(title === 'The Fifth Season'){
      this.library.shelves.fantasy.pop();
      return `Yes, we have ${title}`;
    }
    return `Sorry, we do not have ${title}`;
}

  calculateLateFee(num) {
    return Math.ceil(num * .25);
  }
}

module.exports = Librarian;
