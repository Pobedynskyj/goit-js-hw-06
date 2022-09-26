const numberCategories = document.querySelectorAll('.item');
console.log(`Number of categories: `, numberCategories.length);

const result = numberCategories.forEach((element) => {
    const titleCategory = element.querySelector('h2');
    const itemCategory = element.querySelectorAll('li');
    console.log(`Category: `, titleCategory.textContent);
    console.log(`Elements: `, itemCategory.length);
})