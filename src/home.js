import "./home.css";

export default function Home() {
  const content = document.querySelector("#content");
  content.innerHTML = "";

  const hero = document.createElement("div");
  const h1 = document.createElement("h1");
  const p = document.createElement("p");
  const button = document.createElement("button");

  hero.id = 'hero'
  h1.textContent = "Kivi's Restaurant";
  p.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis incidunt cupiditate blanditiis veniam architecto pariatur commodi minus sint amet veritatis, non accusamus ullam odio eaque cum illum accusantium, quo quisquam?";
  button.textContent = "Menu";
  button.id = 'menu'

  hero.append(h1, p, button);
  content.append(hero);
}
