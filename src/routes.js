const {
  saveNewBook, getAllBooks, getDetailBooks, editBookById, deleteBookById,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: saveNewBook,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooks,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getDetailBooks,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: editBookById,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBookById,
  },
];

module.exports = routes;
