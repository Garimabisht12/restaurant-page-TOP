import "./contact.css";

export default function Contact() {
  const content = document.querySelector("#content");
  content.innerHTML = "";
  const contact = document.createElement("div");
  const container = document.createElement("div");
  const h1 = document.createElement("h1");
  const p = document.createElement("p");
  const address = document.createElement("p");
  const h2 = document.createElement("h2");
  const email = document.createElement("p");
  container.classList.add('container')
  contact.classList.add('contact')
  h1.textContent = "Contact us";

  h2.textContent = "Kivi's Restaurant";
  address.textContent = "4287 Nebula Way, Aethelgard, Xanadu 90210";

  p.textContent = "555-555-5554";

  email.textContent = "kiviEmail@kivi.com";

  contact.append( h2, address, p, email)
  container.append(h1,contact);
  content.append(container)
}
