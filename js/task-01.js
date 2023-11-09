const categoriesList = document.getElementById('categories');
const categoryItems = categoriesList.children;
console.log('Number of categories:', categoryItems.length);
const categoryItemsArr = [...categoryItems];

categoryItemsArr.forEach((categoryItem) => {
  const categoryName = categoryItem.getElementsByTagName('h2')[0].textContent;
  const categoryElements = categoryItem.getElementsByTagName('li');

  console.log('Category:', categoryName);
  console.log('Elements:', categoryElements.length);
});
