document.addEventListener("DOMContentLoaded", () => {
  const destinationsContainer = document.getElementById(
    "destinations-container"
  );
  const regionFilter = document.getElementById("region-filter");
  const activityFilter = document.getElementById("activity-filter");
  const prevTipBtn = document.getElementById("prevTip");
  const nextTipBtn = document.getElementById("nextTip");
  const tipsCarousel = document.getElementById("tips-carousel");

  const destinations = [
    {
      name: "Costa Rica Eco-Lodge",
      description:
        "Immerse yourself in the lush rainforests of Costa Rica while staying at a sustainable eco-lodge.",
      image: "./images/destinations/costa-rica-travel.webp",
      region: "americas",
      activities: ["nature", "adventure"],
    },
    {
      name: "Santorini Sustainable Resort",
      description:
        "Experience the beauty of Santorini while supporting local conservation efforts at this eco-friendly resort.",
      image: "./images/destinations/santorini-travel.jpg",
      region: "europe",
      activities: ["culture", "relaxation"],
    },
    {
      name: "Bali Bamboo Retreat",
      description:
        "Stay in a unique bamboo villa and learn about sustainable living practices in Bali.",
      image: "./images/destinations/bali-travel.jpg",
      region: "asia",
      activities: ["culture", "nature"],
    },
    {
      name: "African Wildlife Safari",
      description:
        "Embark on a responsible wildlife safari that supports conservation efforts in Africa.",
      image: "./images/destinations/safari-travel.jpg",
      region: "africa",
      activities: ["nature", "adventure"],
    },
    {
      name: "New Zealand Eco-Tour",
      description:
        "Explore the stunning landscapes of New Zealand through environmentally conscious guided tours.",
      image: "./images/destinations/new-zeland-travel.jpg",
      region: "oceania",
      activities: ["nature", "adventure"],
    },
    {
      name: "Iceland Geothermal Retreat",
      description:
        "Relax in geothermal hot springs while learning about renewable energy in Iceland.",
      image: "./images/destinations/ice-land-travel.webp",
      region: "europe",
      activities: ["relaxation", "nature"],
    },
  ];

  function renderDestinations(filteredDestinations) {
    destinationsContainer.innerHTML = "";
    filteredDestinations.forEach((dest) => {
      const card = document.createElement("div");
      card.className = "destination-card";
      card.innerHTML = `
                  <img src="${dest.image}" alt="${
        dest.name
      }" class="destination-image">
                  <div class="destination-info">
                      <h3>${dest.name}</h3>
                      <p>${dest.description}</p>
                      <div class="destination-tags">
                          ${dest.activities
                            .map(
                              (activity) =>
                                `<span class="tag">${activity}</span>`
                            )
                            .join("")}
                      </div>
                  </div>
              `;
      destinationsContainer.appendChild(card);
    });
  }

  renderDestinations(destinations);

  function filterDestinations() {
    const selectedRegion = regionFilter.value;
    const selectedActivity = activityFilter.value;
    const filteredDestinations = destinations.filter(
      (dest) =>
        (!selectedRegion || dest.region === selectedRegion) &&
        (!selectedActivity || dest.activities.includes(selectedActivity))
    );
    renderDestinations(filteredDestinations);
  }

  regionFilter.addEventListener("change", filterDestinations);
  activityFilter.addEventListener("change", filterDestinations);

  let currentTipIndex = 0;
  const tips = tipsCarousel.children;

  function showTip(index) {
    Array.from(tips).forEach((tip, i) => {
      tip.style.display = i === index ? "block" : "none";
    });
  }

  function nextTip() {
    currentTipIndex = (currentTipIndex + 1) % tips.length;
    showTip(currentTipIndex);
  }

  function prevTip() {
    currentTipIndex = (currentTipIndex - 1 + tips.length) % tips.length;
    showTip(currentTipIndex);
  }

  nextTipBtn.addEventListener("click", nextTip);
  prevTipBtn.addEventListener("click", prevTip);

  showTip(currentTipIndex);

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

  function setupLazyLoading() {
    const images = document.querySelectorAll(".destination-image");
    images.forEach((img) => {
      img.setAttribute("data-src", img.src);
      img.src =
        "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
      imageObserver.observe(img);
    });
  }

  renderDestinations(destinations);
  setupLazyLoading();
});
