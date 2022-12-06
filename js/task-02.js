const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.getElementById("ingredients");
const markup = ingredients.forEach(ingredient => {
    let items = document.createElement("li");
    items.innerHTML = ingredient;
    list.appendChild(items);
});
console.log(markup);