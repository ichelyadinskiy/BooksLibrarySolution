using BooksLibrarySolution.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BooksLibrarySolution.Services
{
    public class Repository
    {
        public void Insert(BookModel book)
        {
            using (var context = new LibraryContext())
            {
                context.Books.Add(new Books
                {
                    Title = book.Title,
                    Author = book.Author,
                    Description = book.Description,
                    PublishYear = Convert.ToInt32(book.PublishYear)
                });
                context.SaveChanges();
            }
        }

        public IEnumerable<BookModel> GetBooks()
        {
            List<BookModel> books = new List<BookModel>();
            using (var context = new LibraryContext())
            {
                foreach (var book in context.Books)
                {
                    books.Add(new BookModel
                    {
                        Title = book.Title,
                        Author = book.Author,
                        Description = book.Description,
                        PublishYear = book.PublishYear
                    });
                }
            }
            return books;
        }
    }
}