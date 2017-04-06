var library = [
  scifi1 = new Book("Slaughter House 5", 'Kurt Vonnegut', 'science fiction', 1969, 288),
  scifi2 = new Book("1984", "George Orwell", "science fiction", 1949, 336),
  scifi3 = new Book('Hitchhikers Guide to the Galaxy', 'Douglas Adams', 'science fiction', 1978, 224),
  scifi4 = new Book('Enders Game', 'Orson Scott Card', 'science fiction', 1985, 352),
  scifi5 = new Book('Dune', 'Frank Herbert', 'science fiction', 1965, 896),
  fantasy1 = new Book('The Princess Bride', 'William Goldman', 'fantasy', 1973, 512),
  fantasy2 = new Book('The Fellowship of the Ring', 'J. R. R. Tolkien', 'fantasy', 1954, 432),
  fantasy3 = new Book('Northern Lights', 'Philip Pullman', 'fantasy', 1995, 432),
  fantasy4 = new Book('The Voyage of the Dawn Treader', 'C.S. Lewis', 'fantasy',1952, 256),
  fantasy5 = new Book('American Gods', 'Neil Gaiman', 'fantasy', 2001, 784),
];

function Book(bookTitle, author, genre, year, pageCount) {
  this.bookTitle = bookTitle;
  this.author = author;
  this.genre = genre;
  this.year = year;
  this.pageCount = pageCount;
}

function genreFilter(genre) {
  var filter = [];
  for (i = 0; i < library.length; i++) {
    if (library[i].genre === genre) {
      filter.push(library[i]);
    }
  }
  return filter;
}

function eraFilter(bookArray, era) {
  var filter = [];
  for (i = 0; i < bookArray.length; i++) {
    if (era === "modern") {
      if (bookArray[i].year > 1980) {
        filter.push(bookArray[i]);
      }
    } else if (era === "classic") {
      if (bookArray[i].year < 1980) {
        filter.push(bookArray[i]);
      }
    }
  }
  return filter;
}

function lengthFilter(bookArray, bookLength) {
  var filter = [];
  for (i = 0; i < bookArray.length; i++) {
    if (bookLength === 'short') {
      if (bookArray[i].pageCount < 300) {
        filter.push(bookArray[i]);
      }
    } else if (bookLength === 'long') {
       if (bookArray[i].pageCount > 300) {
        filter.push(bookArray[i]);
      }
    }
  }
  return filter;
}

function suggest(genre, era, pageCount) {
  return (lengthFilter(eraFilter(genreFilter(genre), era), pageCount));
}

$(function() {
  $('form').submit(function(event){
    event.preventDefault();
    var genreInput = $('input:radio[name="genre"]:checked').val();
    var eraInput = $('input:radio[name="era"]:checked').val();
    var pageCountInput = $('input:radio[name="page-count"]:checked').val();
    var bookResults = suggest(genreInput, eraInput, pageCountInput);

  })
});
