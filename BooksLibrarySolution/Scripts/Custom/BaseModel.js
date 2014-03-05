function BaseModel() {
    var self = this;
    self.title = ko.observable();
    self.author = ko.observable();
    self.description = ko.observable();
    self.publishYear = ko.observable();
}