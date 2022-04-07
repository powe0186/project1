// elements that need capturing.
var dropdown = $('#key-or-auth');
var search = $('#search');
var searchBtn = $('#search-btn');
var recSection = $('#recs-go-here');
var searchData;
var readingList = getList();
var timesListDiv = $('#times-list');

// Search button creates URL, erases any current searches, fetches,
// and loads new searches.


searchBtn.on('click', function() {
  var searchParam = search.val();
  //create URL:
  var keyOrAuth = dropdown.val();
  if (keyOrAuth === 'author') {
    var bookLink = 'https://www.googleapis.com/books/v1/volumes?q=inauthor:' + searchParam;
    console.log(bookLink);
  } else if (keyOrAuth === 'keyphrase') {
    var bookLink = 'https://www.googleapis.com/books/v1/volumes?q=' + searchParam;
  }

  // Clear any current search:
  recSection.html("");
  fetch(bookLink)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    searchData = data;
    console.log(data);
    listRecommendations(data);
    
  });
})


function listRecommendations(data) {
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
    var pageCount = data.items[i].volumeInfo.pageCount;
  
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

    var ratingP = $('<p class="subtitle">');
    ratingP.text("Average Rating: " + rating + "/5"); // check to see what the rating is out of.
    descriptionArticle.append(ratingP);

    var pagesP = $('<p class="subtitle">');
    pagesP.text('Pages: ' + pageCount);
    descriptionArticle.append(pagesP);

    var btnDiv = $('<div class="buttons">');
    var readingListBtn = $('<button class="button is-success">');
    readingListBtn.text('Add to List');
    readingListBtn.attr('data-num', i);
    btnDiv.append(readingListBtn);
    descriptionArticle.append(btnDiv);


    recSection.append(ancestorDiv);
  }
}


//event listener for buttons in the recommendations section.
recSection.on('click', function(event) {
  
  if (event.target.matches('button')) {
    var targetBtn = $(event.target);
    var bookNum = targetBtn.attr('data-num');
    addToList(bookNum);
    window.location="MyReadingList.html";
  }

});

function getList() {
  if (localStorage.readingList === undefined) {
    return JSON.parse('[]');
  } else {
    return JSON.parse(localStorage.readingList);
  }
}

function addToList(i) {
  var newBook = {
    title: searchData.items[i].volumeInfo.title,
    author: searchData.items[i].volumeInfo.authors[0],
    img: searchData.items[i].volumeInfo.imageLinks.smallThumbnail,
    isRead: false
  }
  readingList.push(newBook);
  localStorage.setItem('readingList', JSON.stringify(readingList));
}

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

// Ben's key:  akMWZ1RHZpEZFEOe0dEWfbwzdSoLjOkC
// Karen's Key: 
var lastWednesday = moment().day(-4).format('YYYY-MM-DD');
var timesURL = "https://api.nytimes.com/svc/books/v3//lists/" + lastWednesday + "/hardcover-fiction.json?api-key=akMWZ1RHZpEZFEOe0dEWfbwzdSoLjOkC";

  fetch(timesURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    listTopFive(data);
    
  }); 


function listTopFive(data) {
  for (let i = 0; i < 5; i++) {
    var title = data.results.books[i].title;
    var author = data.results.books[i].contributor;  // includes the word 'by' before author(s)
    var coverPic = data.results.books[i].book_image;
    var bookLink = data.results.books[i].buy_links[0].url;
    
    var timesBookDiv = $('<div class="tile is-parent">');
    timesListDiv.append(timesBookDiv);

    var timesBookArticle = $('<article class="tile is-child box">');
    timesBookDiv.append(timesBookArticle);

    

    var timesBookTile = $('<p class="title">');
    timesBookTile.text(title);
    var timesBookAuthor = $('<p class="subtitle">');
    timesBookAuthor.text(author);
    var bookImg = $(`<img src="${coverPic}" width="200px">`);

    timesBookArticle.append(timesBookTile);
    timesBookArticle.append(timesBookAuthor);
    var bookA = $(`<a href="${bookLink}">`);
    timesBookArticle.append(bookA);
    bookA.append(bookImg);
    
  }
}

function timesTopFive() {

  

}





  //New york times top ten stuff we need

  // data.results.books[i].author   AUTHOR
  //data.results.books[i].book_image  COVER PIC
  //data.results.books[i].title     TITLE
  //data.results.books[i].description    DESCRIPTION
  //