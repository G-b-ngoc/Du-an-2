const cards = Array.from(document.querySelectorAll(".card"));
const cardsContainer = document.querySelector("#cards");

for (const card of cards)
  cardsContainer.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    x = e.clientX - rect.left;
    y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
    card.style.setProperty("--mouse-z", `${z}px`);
    card.style.setProperty("--mouse-v", `${v}px`);
  });
