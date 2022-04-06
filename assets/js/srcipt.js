// elements that need capturing.
var author = $('#author');
var keyphrase = $('#keyphrase');
var search = $('#search');
var recSection = $('#recs-go-here');




// .items = array of 10 books.
var bookLink = 'https://www.googleapis.com/books/v1/volumes?q=supernatural%romance'  //inauthor:Brandon%sanderson'; //fantasy+

fetch(bookLink)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    console.log(data.items[1].volumeInfo.description)
    listRecommendations(data);
    
  });

function listRecommendations(data) {
  console.log("function running");
  var greatReadP = $('<p class="title">');
  greatReadP.text("Your next GREAT read:");

  for (let i =0; i < data.items.length; i++) {
    var title = data.items[i].volumeInfo.title;
    var authors =data.items[i].volumeInfo.authors.join(', ');
    if (data.items[i].volumeInfo.imageLinks != undefined) {
      var imgLink = data.items[i].volumeInfo.imageLinks.smallThumbnail;
    } else { 
      console.log("no image");
    }
    var pagecount = data.items[i].volumeInfo.pageCount;
    var shortDescription = data.items[i].volumeInfo.description;
    var rating = data.items[i].volumeInfo.averageRating;

    //create the elements and put them on the page
    var ancestorDiv = $('<div class="tile is-ancestor">');

    var parentDiv = $('<div class="tile is-parent">');
    ancestorDiv.append(parentDiv);

    var articleDiv = $('<article class="tile is-child box">');
    parentDiv.append(articleDiv);
    
    var titleP = $('<p class="bookTitle title">');
    titleP.text(title);
    articleDiv.append(titleP);

    var authorP = $('<p class="subtitle">');
    authorP.text("By " + authors);
    articleDiv.append(authorP);

    var coverImg = $(`<img src="${imgLink}" alt="no cover image available">`)
    articleDiv.append(coverImg);

    var descriptionParent = $('<div class="tile is-parent is-8">');
    ancestorDiv.append(descriptionParent);

    var descriptionArticle = $('<article class="tile is-child box">');
    descriptionParent.append(descriptionArticle);

    var descriptionP = $('<p class="is-size-22">Description</p>');
    descriptionP.text(shortDescription);
    descriptionArticle.append(descriptionP);

    var ratingP = $('<p class="subtitle">Rating</p>');
    ratingP.text("Average Rating: " + rating + "/5"); // check to see what the rating is out of.
    descriptionArticle.append(ratingP);

    recSection.append(ancestorDiv);
  }
}


const starTotal = 5;
 
for(const rating in ratings) {  
  // 2
  const starPercentage = (ratings[rating] / starTotal) * 100;
  // 3
  const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;
  // 4
  document.querySelector(`.${rating} .stars-inner`).style.width = starPercentageRounded; 
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