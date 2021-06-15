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
