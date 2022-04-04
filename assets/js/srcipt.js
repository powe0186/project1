
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
  //.items[i].volumeInfo.title = book title.

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
  //.items[i].volumeInfo  = object with all the book's information
  //.items[i].volumeInfo.authors = array of strings of authors.
  //.items[i].volumeInfo.imageLinks = object of links for images.
            // .items[i].volumeInfo.imageLinks.smallThumbnail  
            // .items[i].volumeInfo.imageLinks.thumbnail
  //.items[i].volumeInfo.infoLink = link to more information.
  //.items[i].volumeInfo.pageCount  =  gives the page count.
  //.items[i].volumeInfo.publishedDate
  //.items[i].searchInfo.textSnippet = just the first couple of sentences of the description.
  //.items[i].volumeInfo.description  =  a much longer description
  //.items[i].volumeInfo.averageRating
  //.items[i].volumeInfo.publisher
  //.items[i].volumeInfo.categories = an array of categories.


  
  var timesAPIKey = "akMWZ1RHZpEZFEOe0dEWfbwzdSoLjOkC";
  var timesBestsellersURL = "https://api.nytimes.com/svc/books/v3/reviews.json?author=sanderson&api-key=akMWZ1RHZpEZFEOe0dEWfbwzdSoLjOkC";
  
  fetch(timesBestsellersURL, {
  method: 'GET', //GET is the default.
  mode: 'cors'
})
  .then(function (response) {
    return response;
  })
  .then(function (data) {
    console.log(data);
  });



