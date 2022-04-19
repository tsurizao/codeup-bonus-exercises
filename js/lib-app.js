(function () {
    //  This app stores library books in a checkout cart
    //  and can store multiple book objects in an array.
    function libApp() {
        var booksToCheckout = [];
        var confirmation = confirm("Would you like to checkout some books?");
        var flag = true;
        while (flag) {
            var title = prompt("Enter the book's title");
            var author = prompt("Enter the book's author");
            var book = {
                title: title,
                author: author,
            }
            booksToCheckout.push(book);
            alert("This book has been added to your cart.");
            flag = confirm("Would you like to checkout another book?");
        }
        alert("Here is a list of the books you have checked out.");
        booksToCheckout.forEach(function (book) {
            alert('Title: ' + book.title + '\n' + 'Author: ' + book.author);
        })
    }

    libApp();
}());