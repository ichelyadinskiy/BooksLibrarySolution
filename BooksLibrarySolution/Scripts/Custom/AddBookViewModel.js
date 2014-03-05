function AddBookViewModel(options) {
    var self = this;
    var base = new BaseModel();

    self.title = base.title;
    self.author = base.author;
    self.description = base.description;
    self.publishYear = base.publishYear;

    self.addNew = function() {
        $('.txtBx').attr('type','text');
        $('#add').attr('type', 'hidden');
        $('#create').attr('type', 'button');
        $('#cancel').attr('type', 'button');
    };
    self.cancel = function() {
        $('.txtBx').attr('type','hidden');
        $('#add').attr('type', 'button');
        $('#create').attr('type', 'hidden');
        $('#cancel').attr('type', 'hidden');
    };
    self.showError = function () {
        $("#message").attr("style", "display: inline");
    };
    self.hideEror = function () {
        $("#message").attr("style", "display: none");
    };
    self.createNew = function() {
        $.ajax(options.url, {
            data: ko.toJSON({
                title: self.title,
                author: self.author,
                description: self.description,
                publishYear: self.publishYear
            }),
            type: 'POST',
            contentType: 'application/json',
            success: function (result) {
                if (result=="ERROR!") {
                    self.showError();
                }
                else {
                    self.hideEror();
                    self.cancel();
                    window.bookList.getBooks();
                }
            }
        })
    }
}