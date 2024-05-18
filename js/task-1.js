const listsElements = document.querySelectorAll('.item');

console.log('Number of categories:', listsElements.length);

listsElements.forEach(element => {
  const category = element.querySelector('h2').textContent;
  const itemsCount = element.querySelectorAll('li').length;

  console.log(`Category: ${category}`);
  console.log(`Elements: ${itemsCount}`);
});
