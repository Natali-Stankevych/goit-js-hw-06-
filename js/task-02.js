const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");



const markup = ingredients.map(el => {
    let item= document.createElement("li");
  item.classList = 'item';
  item.textContent = el;
  return item
  
});
list.append(...markup)
console.log(list);