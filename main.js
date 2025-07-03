const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute(
        "class",
        isOpen ? "ri-close-line" : "ri-menu-3-line"
    );
} );

navLinks.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-3-line")
} );


const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

const sr = ScrollReveal();

sr.reveal(".header-container h1", {
  ...scrollRevealOption,
});

sr.reveal(".header-content .section-description", {
  ...scrollRevealOption,
  delay: 500,
});

sr.reveal(".header-btns", {
  ...scrollRevealOption,
  delay: 1000,
});
sr.reveal(".hotel-card", {
  ...scrollRevealOption,
  interval: 500,
});
sr.reveal(".steps-card", {
  ...scrollRevealOption,
  interval: 500,
});
const inspiration = document.querySelector(".inspiration-wrapper");
const inspirationImages = Array.from(inspiration.children);

inspirationImages.forEach((item) => {
  const duplicateNode = item.cloneNode(true);
  duplicateNode.setAttribute("aria-hidden", true);
  inspiration.appendChild(duplicateNode);
});
sr.reveal(".property-card", {
  ...scrollRevealOption,
  interval: 500,
});
sr.reveal(".trip-card", {
  ...scrollRevealOption,
  interval: 500,
});