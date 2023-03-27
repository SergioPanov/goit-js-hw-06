const categoriesList = document.querySelector("#categories");

console.log(`Number of categories: ${[...categoriesList.children].length}`);

[...categoriesList.children].forEach((el) => {
  console.log(`Category : ${el.querySelector("h2").textContent}`);
  console.log(`Elements : ${el.querySelectorAll("li").length}`);
});
