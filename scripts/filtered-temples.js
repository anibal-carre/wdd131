const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  {
    templeName: "São Paulo Brazil",
    location: "São Paulo, Brazil",
    dedicated: "1978, October, 30",
    area: 59246,
    imageUrl:
      "https://www.churchofjesuschrist.org/imgs/940f3e201364433a3d5d3dc14b0cacee38d41d1d/full/640%2C/0/default",
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 41010,
    imageUrl:
      "https://www.churchofjesuschrist.org/imgs/17e2c70d687fffedfe115197e57fa8f5d1d369bb/full/640%2C/0/default",
  },
];

function displayTemples(filteredTemples) {
  const templeContainer = document.getElementById("temple-container");
  templeContainer.innerHTML = "";

  filteredTemples.forEach((temple) => {
    const templeCard = document.createElement("figure");
    templeCard.classList.add("temple-card");

    templeCard.innerHTML = `
          
          
          <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
          <figcaption>${temple.templeName}</figcaption>
          <p>Location: ${temple.location}</p>
          <p>Dedicated: ${temple.dedicated}</p>
          <p>Size: ${temple.area}</p>
          
       
      `;

    templeContainer.appendChild(templeCard);
  });
}

function filterTemples(filter) {
  let filteredTemples = temples;

  if (filter === "old") {
    filteredTemples = temples.filter((t) => {
      const year = parseInt(t.dedicated.split(",")[0]);
      return year < 1900;
    });
  } else if (filter === "new") {
    filteredTemples = temples.filter((t) => {
      const year = parseInt(t.dedicated.split(",")[0]);
      return year >= 2000;
    });
  } else if (filter === "large") {
    filteredTemples = temples.filter((t) => t.area > 50000);
  } else if (filter === "small") {
    filteredTemples = temples.filter((t) => t.area < 10000);
  } else if (filter === "home") {
    filteredTemples = temples;
  }

  displayTemples(filteredTemples);
}

document.addEventListener("DOMContentLoaded", () => {
  displayTemples(temples);

  document.querySelectorAll(".menu-option").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const filter = event.target.getAttribute("data-filter");
      filterTemples(filter);
    });
  });
});

document.getElementById("currentyear").textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent =
  "Last modified: " + document.lastModified;

const menuIcon = document.getElementById("menu-icon");
const menu = document.getElementById("menu");

menuIcon.addEventListener("click", () => {
  menu.classList.toggle("active");
});
