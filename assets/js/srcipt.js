var bookLink = 'https://www.googleapis.com/books/v1/volumes?q=fantasy+inauthor:sanderson';

fetch(bookLink)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    // window.location =data.items[0].volumeInfo.previewLink;
  });



  // .items = array of 10 books.

  //.items[i].volumeInfo  = object with all the book's information
  //.items[i].volumeInfo.authors = array of strings of authors.
  //.items[i].volumeInfo.imageLinks = object of links for images.
            // .items[i].volumeInfo.imageLinks.smallThumbnail  
            // .items[i].volumeInfo.imageLinks.thumbnail
  //.items[i].volumeInfo.infoLink = link to more information.
  //.items[i].volumeInfo.pageCount  =  gives the page count.
  //.items[i].volumeInfo.publishedDate
  //