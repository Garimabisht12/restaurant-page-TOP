import "./menu.css";

const beverages = [
  {
    title: "Matcha Latte",
    description: "Creamy Japanese green tea with steamed milk",
    cost: "$4",
  },
  {
    title: "Iced Matcha",
    description: "Chilled matcha served over ice",
    cost: "$4",
  },
  {
    title: "Sakura Tea",
    description: "Delicate Japanese tea infused with cherry blossom",
    cost: "$3",
  },
];

const sideDishes = [
  {
    title: "Agedashi Tofu",
    description: "Crispy tofu served with a light savory broth",
    cost: "$6",
  },

  {
    title: "Miso Soup",
    description: "Traditional soup with tofu, wakame and green onion",
    cost: "$4",
  },
];

const main = [
  {
    title: "Tonkotsu Ramen",
    description: "Rich pork broth with noodles, egg and tender chashu",
    cost: "$12",
  },
  {
    title: "Katsu Curry",
    description: "Crispy chicken cutlet served with Japanese curry and rice",
    cost: "$13",
  },
  {
    title: "Spicy Miso Ramen",
    description: "Miso broth with noodles, vegetables and a spicy kick",
    cost: "$13",
  },
];

export default function Menu() {
  const menuContainer = document.createElement("div");
  const container = document.createElement("div");
  const content = document.querySelector("#content");
  content.innerHTML = "";
  const h1 = document.createElement("h1");
  const button = document.createElement("button");

  h1.classList.add("heading");
  h1.textContent = "MENU";

  menuContainer.id = "menu-container";
  container.classList.add("menu-container");

  const beverageContainer = showMenu("Beverages", beverages);
  const sideContainer = showMenu("Sides", sideDishes);
  const mainContainer = showMenu("Main", main);
  menuContainer.append(beverageContainer, sideContainer, mainContainer);
  container.append(h1, menuContainer);
  content.append(container);
}

function showMenu(name, category) {
  const menuContainer = document.createElement("div");
  const title = document.createElement("h2");
  title.textContent = name;
  title.classList.add("title");
  menuContainer.append(title);
  for (let item of category) {
    const description = document.createElement("p");
    const itemTitle = document.createElement("h2");
    const cost = document.createElement("h3");
    itemTitle.textContent = item.title;
    description.textContent = item.description;
    cost.textContent = item.cost;
    cost.classList.add("cost");
    menuContainer.append(itemTitle, description, cost);
  }

  return menuContainer;
}
