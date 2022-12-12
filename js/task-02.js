const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.getElementById("#ingredients");
const liArray = [];


const markup = ingredients.forEach(ingredient => {
    let item= document.createElement("li");
  item.classList = 'item';
  item.textContent = ingredients;
  liArray.push(item)
});
console.log(...liArray);