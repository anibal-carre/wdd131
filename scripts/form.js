document.getElementById("currentyear").textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent =
  "Last modified: " + document.lastModified;

document.addEventListener("DOMContentLoaded", function () {
  const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 },
  ];

  const productSelect = document.getElementById("productName");
  products.forEach((product) => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });

  const form = document.getElementById("reviewForm");
  form.addEventListener("submit", function () {
    let reviewCount = localStorage.getItem("reviewCount") || 0;
    reviewCount++;
    localStorage.setItem("reviewCount", reviewCount);
  });
});
