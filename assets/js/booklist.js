var yettoRead = $("#yettoRead");
var toRead = $("checkbox");
var readingList = getList();
//console.log(readingList)

populateList (readingList);

function getList() {
    if (localStorage.readingList === undefined) {
      return JSON.parse('[]');
    } else {
      return JSON.parse(localStorage.readingList);
    }
  }

function populateList(list){

    for (let i=0; i < readingList.length; i++){
        var bookArticle = $("<article class='panel is-primary'>");
        var bookI = $('<i class="mx-4 fas fa-book" aria-hidden="true"></i>');
        bookArticle.append(bookI);
        var bookCheck = $(' <label class="checkbox">');
        bookCheck.html(`<input type="checkbox">${readingList[i].title}`);
        bookArticle.append(bookCheck);
        yettoRead.append(bookArticle);

    }
}

