import { getAllCategories, resetAllFiters } from './api';
import { fetchRecipes } from './all_recipes';

const allCategoriesEl = document.querySelector('.js-all-categories');
const categoriesListEl = document.querySelector('.js-categories');
const categoriesContainerEl = document.querySelector(
  '.categories-list-container'
);

function createCategoriesList(categories) {
  const markup = categories
    .map(
      category =>
        `<li>
        <button type="button" class="categories-list-item categories-item js-test">${category.name}</button>
        </li>`
    )
    .join('');
  categoriesListEl.insertAdjacentHTML('beforeend', markup);
}

getAllCategories()
  .then(categories => createCategoriesList(categories))
  .catch(error => console.log(error));

fetchRecipes();

categoriesContainerEl.addEventListener('click', onCategory);

async function onCategory(evt) {
  if (evt.target.nodeName !== 'BUTTON') {
    return;
  }

  let selectCategory = evt.target;
  localStorage.setItem('category', selectCategory.textContent);

  const activeCategoryEl = document.querySelector('.active-category');
  activeCategoryEl.classList.remove('active-category');
  selectCategory.classList.add('active-category');

  fetchRecipes();
}

allCategoriesEl.addEventListener('click', onAllCategory);

async function onAllCategory(evt) {
  let selectCategory = evt.target;
  resetAllFiters();

  const activeCategoryEl = document.querySelector('.active-category');
  activeCategoryEl.classList.remove('active-category');
  selectCategory.classList.add('active-category');

  fetchRecipes();
}
