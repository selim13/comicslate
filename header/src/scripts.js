/**
 * Returns a random integer between two values, inclusive.
 *
 * @param {Number} min Minimum value, inclusive
 * @param {Number} max Maximum value, inclusive
 * @returns {Number}
 */
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const header = document.querySelector('.header');
if (header) {
  header.addEventListener('mouseover', () => {
    const rnd = getRandomInt(1, 6);
    header.setAttribute('data-color', rnd);
  });
}

const searchSubmit = document.querySelector('.header__search-submit');
const searchForm = document.querySelector('.header__search');
const searchInput = document.querySelector('.header__search-input');

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const style = window.getComputedStyle(searchInput);
  console.log(style);
  if (style.display === 'none') {
    console.log('focus');
    searchInput.focus();
  } else {
    console.log('submit');
    // searchInput.submit();
  }
});
