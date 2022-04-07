var yettoRead = $("#yettoRead");
var toRead = $("checkbox");
var doneReading = $('#done-reading');
var allSections = $('#lists');
var readingList = getList();
populateList();



function getList() {
  if (localStorage.readingList === undefined) {
    return JSON.parse('[]');
  } else {
    return JSON.parse(localStorage.readingList);
  }
}

allSections.on('click', function (e) {
    var target = $(e.target);
  if (e.target.matches('button')) {
    var listIndex = target.attr('data-index');
    if (readingList[listIndex].isRead) {
      readingList[listIndex].isRead = false;
    } else {
      readingList[listIndex].isRead = true;
    }
  }
  populateList();

})



function populateList(){
    //reset each list
    yettoRead.html('<p class="bookTitle title">To-Read: 📖</p>');
    doneReading.html('<p class="title">Completion List: ✔ </p>')
    for (let i=0; i < readingList.length; i++){
        var bookArticle = $("<article class='panel is-primary'>");
        var bookI = $('<i class="mx-4 fas fa-book" aria-hidden="true"></i>');
        bookArticle.append(bookI);
        var btnDiv = $('<div class="buttons">');
        var doneBtn = $(`<button data-index="${i}" class="button is-success"></button>`);
        var titleP = $(`<p class="bookTitle subtitle">${readingList[i].title}</p>`)
        btnDiv.append(doneBtn);
        btnDiv.append(titleP);
        bookArticle.append(btnDiv);
        if (readingList[i].isRead) {
          doneReading.append(bookArticle);
          doneBtn.text('Read again');
        } else {
          yettoRead.append(bookArticle);
          doneBtn.text('Done');
        }

    }
}

