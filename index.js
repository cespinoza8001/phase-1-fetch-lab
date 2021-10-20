const BASE_URL = 'https://anapioficeandfire.com/api/books'


function fetchBooks() {
  fetch(BASE_URL)
  .then(resp => resp.json())
  .then(books => console.log(renderBooks(books)))
  
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
