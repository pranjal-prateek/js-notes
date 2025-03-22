// Iterator Pattern Example: Photo Album Navigation
// The iterator pattern allows sequential access to a collection without exposing its structure

// Create an Iterator for Photos
function createPhotoIterator(photos) {
  let index = 0;

  return {
    // Move to the next photo
    next: function() {
      return index < photos.length
        ? { value: photos[index++], done: false }
        : { done: true };
    },

    // Check if there are more photos
    hasNext: function() {
      return index < photos.length;
    },

    // Reset to the beginning of the album
    reset: function() {
      index = 0;
    }
  };
}

// Example Usage
const photos = ["Photo1.jpg", "Photo2.jpg", "Photo3.jpg"];
const photoIterator = createPhotoIterator(photos);

console.log(photoIterator.next()); // { value: 'Photo1.jpg', done: false }
console.log(photoIterator.next()); // { value: 'Photo2.jpg', done: false }
console.log(photoIterator.hasNext()); // true
console.log(photoIterator.next()); // { value: 'Photo3.jpg', done: false }
console.log(photoIterator.hasNext()); // false

// Reset and iterate again
photoIterator.reset();
console.log(photoIterator.next()); // { value: 'Photo1.jpg', done: false }

// Summary for Revision:
// - Iterator Pattern provides a way to traverse a collection without exposing its internal structure.
// - It is useful for sequential access to data.
// - The iterator has methods like `next()`, `hasNext()`, and `reset()`.
// - You can apply this pattern to any type of collection, like arrays, lists, or even complex data structures.

// Example: Add a New Collection Type
// const books = ['Book1', 'Book2', 'Book3'];
// const bookIterator = createPhotoIterator(books);
// console.log(bookIterator.next()); // { value: 'Book1', done: false }
