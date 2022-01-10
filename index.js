import renderBooks from './modules/renderer.js';
import Books from './modules/class.js';

const formElm = document.querySelector('form');

const booksList = new Books();

renderBooks(booksList);

formElm.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = formElm.title.value.trim();
  const author = formElm.author.value.trim();

  formElm.title.value = '';
  formElm.author.value = '';

  booksList.add({ title, author });
  renderBooks();

  return false;
});

const links = document.querySelectorAll('.links a');
links.forEach((link) => {
  link.addEventListener('click', () => {
    if (link.classList.contains('active')) return;

    links.forEach((anchor) => anchor.classList.remove('active'));

    link.classList.add('active');

    document.querySelector('.flex').classList.remove('flex');

    document.querySelector(`.${link.id}`).classList.add('flex');
  });
});
