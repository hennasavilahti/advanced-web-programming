import { Book } from './book.js';

const displayBookDetails = (book) => {
  console.log(book.getInfo());
};

const book1 = new Book('Twilight', 'Stephenie Meyer');
displayBookDetails(book1);
