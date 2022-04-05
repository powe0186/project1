// elements that need capturing.
var authorOrGenre = $('#author');
var search = $('#search');






// .items = array of 10 books.
var bookLink = 'https://www.googleapis.com/books/v1/volumes?q=horror%thriller'  //inauthor:Brandon%sanderson'; //fantasy+

fetch(bookLink)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    listRecommendations(data);
    
  });

function listRecommendations(data) {
  for (let i =0; i < data.items.length; i++) {
    var title = data.items[i].volumeInfo.title;
    var authors =data.items[i].volumeInfo.authors.join(', ');
    if (data.items[i].volumeInfo.imageLinks != undefined) {
      var imgLink = data.items[i].volumeInfo.imageLinks.smallThumbnail;
    } else { 
      console.log("no image");
    }
    var pagecount = data.items[i].volumeInfo.pageCount;
    var shortDescription = data.items[i].searchInfo.textSnippet;

    var bookDiv = $('<div class="tile is-parent">');
    var articleDiv = $('<article class="tile is-child box">');
    bookDiv.append(articleDiv);

    var greatReadP = $('<p class="title">');
    greatReadP.text("Your next GREAT read:");
    articleDiv.append(greatReadP);

    var titleP = $('<p class="bookTitle">');
    titleP.text(title);
    articleDiv.append(titleP);

    var imgFig = $('<figure class="image is-128x128">');
    articleDiv.append(imgFig);

    var coverImg = $(`<img src="${imgLink}" alt="no cover image available">`)
    imgFig.append(coverImg);

    console.log(bookDiv);

    
  }
}





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


var timesURL = "https://api.nytimes.com/svc/books/v3//lists/2019-01-20/hardcover-fiction.json?api-key=akMWZ1RHZpEZFEOe0dEWfbwzdSoLjOkC";

  fetch(timesURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    
  }); 


function listTopTen(data) {
  for (let i = 0; i < 5; i++) {
    var title = data.results.books[i].title;
    var author = data.results.books[i].contributor;  // includes the word 'by' before author(s)
    var coverPic = data.results.books[i].book_image;
    var description = data.results.books[i].description;
  }
}

  //New york times top ten stuff we need

  // data.results.books[i].author   AUTHOR
  //data.results.books[i].book_image  COVER PIC
  //data.results.books[i].title     TITLE
  //data.results.books[i].description    DESCRIPTION
  //

