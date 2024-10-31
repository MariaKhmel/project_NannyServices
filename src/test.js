const liArr = document.querySelectorAll('.item');
console.log(`Number of categories: ${liArr.length}`)

liArr.forEach(el => {
  const h2 = el.querySelector('h2').textContent;
  const liQuantity = el.querySelectorAll('li').length;
  console.log(`Category: ${h2}`);
  console.log(`Elements : ${liQuantity}`)
});