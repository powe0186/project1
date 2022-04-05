// .items = array of 10 books.
var bookLink = 'https://www.googleapis.com/books/v1/volumes?q=fantasy'; //+inauthor:sanderson

fetch(bookLink)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    listRecommendations(data);
    
  });

function listRecommendations(data) {
  for (let i =0; i < data.items; i++) {
    var title = data.items[i].volumeInfo.title;
    var authors =data.items[i].volumeInfo.authors.join(', ');
    var imgLink = data.items[i].volumeInfo.imageLinks.smallThumbnail;
    var pagecount = data.items[i].volumeInfo.pageCount;
    var shortDescription = data.items[i].searchInfo.textSnippet;
  }
}




  // .items = array of 10 books.

  //.items[i].volumeInfo  = object with all the book's information
  //.items[i].volumeInfo.title = book title.
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



  
  fetch()
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    listRecommendations(data);
    
  }); 