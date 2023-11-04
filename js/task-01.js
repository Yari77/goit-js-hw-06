const categoriesList = document.querySelector('#categories');
const categoryItems = categoriesList.querySelectorAll('li.item');

console.log(`There are ${categoryItems.length} categories.`);

categoryItems.forEach((item) => {
  const categoryTitle = item.querySelector('h2').textContent;
  const categoryItemLength = item.querySelectorAll('li').length;
  console.log(`Category: ${categoryTitle}`);
  console.log(`Number of items in the category: ${categoryItemLength}`);
});
