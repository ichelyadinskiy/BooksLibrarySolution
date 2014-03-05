function BooksListModel(options) {
    var self = this;
    window.bookList = this;
    var base = new BaseModel();
    
    self.books = ko.observableArray([]);

    self.getBooks = function () {
        $.ajax({
            url: options.url,
            type: "GET",
            contentType: 'application/json',
            success: function (result) {
                self.books().length = 0;
                for (var item in result) {
                    self.books.push(result[item]);
                }
            }
        });

    }

    self.getBooks();
}