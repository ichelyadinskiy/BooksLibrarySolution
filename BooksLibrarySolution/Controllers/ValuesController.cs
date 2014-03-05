using BooksLibrarySolution.Models;
using BooksLibrarySolution.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Results;

namespace BooksLibrarySolution.Controllers
{
    public class ValuesController : ApiController
    {
        Repository _repository;

        public ValuesController()
        {
            _repository = new Repository();
        }

        [HttpPost]
        public string PostBook(BookModel model)
        {
            if (!ModelState.IsValid)
                return "ERROR!";
            _repository.Insert(model);
            return "OK!";
        }

        [HttpGet]
        public IEnumerable<BookModel> GetBooks()
        {
            return _repository.GetBooks();
        }
    }
}
