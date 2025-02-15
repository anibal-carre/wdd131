const menuIcon = document.querySelector(".div-menu-icon");
const navMenu = document.querySelector("nav ul");
const readMoreBtn = document.querySelector(".read-more-btn");
const subscribeForm = document.getElementById("subscribe-form");

menuIcon.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (!e.target.closest("header")) {
    navMenu.classList.remove("active");
  }
});

const lazyLoad = () => {
  const images = document.querySelectorAll("[data-src]");

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute("data-src");
        observer.unobserve(img);
      }
    });
  });

  images.forEach((img) => imageObserver.observe(img));
};

subscribeForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = e.target.querySelector('input[type="email"]').value;

  let subscribers = JSON.parse(localStorage.getItem("subscribers") || "[]");
  subscribers.push(email);
  localStorage.setItem("subscribers", JSON.stringify(subscribers));

  alert("Thank you for subscribing to our newsletter!");
  e.target.reset();
});

document.addEventListener("DOMContentLoaded", () => {
  lazyLoad();

  const subscribers = JSON.parse(localStorage.getItem("subscribers") || "[]");
  console.log("Current subscribers:", subscribers);
});
