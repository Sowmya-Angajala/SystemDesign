class Book {
  constructor(title, author, reviews) {
    this.title = title;
    this.author = author;
    // Make a copy of the reviews array to avoid external reference
    this.reviews = [...reviews];
  }

  // Deep clone method
  clone() {
    // Create a new array for reviews
    const clonedReviews = [...this.reviews];
    return new Book(this.title, this.author, clonedReviews);
  }
}

// Example usage
const originalBook = new Book("JavaScript Essentials", "Jane Doe", [
  "Great for beginners",
  "Well explained",
]);

const clonedBook = originalBook.clone();

// Modify cloned book's reviews
clonedBook.reviews.push("New review added");

console.log("Original Book:", originalBook);
console.log("Cloned Book:", clonedBook);
