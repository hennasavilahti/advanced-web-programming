class Book {
    constructor(title, author){
        this.title = title;
        this.author = author;
    }
    getSummary() {
        return `Title: ${this.title}, Author: ${this.author}`;
    }
}

const book1 = new Book(`Harry Potter and The Sorcerer's Stone`, 'J. K. Rowling');
const book2 = new Book('Twilight', 'Stephenie Meyer');

console.log(book1.getSummary());
console.log(book2.getSummary());
