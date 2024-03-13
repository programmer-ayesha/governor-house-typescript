// Define the Book interface
interface Book {
    title: string;
    author: string;
    pages: number;
}

// Create objects containing information about different books
const book1: Book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    pages: 281
};

const book2: Book = {
    title: "1984",
    author: "George Orwell",
    pages: 328
};


console.log("Book 1:");
console.log("Title:", book1.title);
console.log("Author:", book1.author);
console.log("Pages:", book1.pages);

console.log("\nBook 2:");
console.log("Title:", book2.title);
console.log("Author:", book2.author);
console.log("Pages:", book2.pages);


