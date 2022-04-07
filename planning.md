# project1

"Ask a Librarian"
 -What should I read next?
 -Top recommendations for YOU based on (last read, favorite author, genre, etc)
 -Today in Book News (i.e NYT bestseller list, article like Ben's fav kickstarter, etc)

API we plan to use:
GoodReads
Google Books

Use Bulma for CSS framework
Save a Reading checklist List or "To Read" to internal storage

Alex Ideas-
    -submit favorite book or author, then website suggests more options.-submit
    -Random book suggestion
    -o
 favorites? (we each input our fav books and have a section that scycles through them)

    -check boxes for fav lists    
Book reviews can come from GoodBooks api

API
INTRODUCTION
The Goodreads API allows developers access to Goodreads data in order to help websites or applications that deal with books be more personalized, social, and engaging. The API can be used in many ways, including:

Get an xml response that contains the review and rating for the specified book and user
URL: https://www.goodreads.com/review/show_by_user_and_book.xml    (sample url)
HTTP method: GET
Parameters:
    key: Developer key (required).
    user_id: id of the user
    book_id: id of the book
    include_review_on_work: 'true' or 'false' indicating whether to return a review for another book in the same work if review not found for the specified book (default 'false', optional)

Find an author by name

Get a user's review for a given book


)

 
 suggested book form

-genre
-fiction/nonfiction
-length
-Favorite author


