document.addEventListener("DOMContentLoaded", () => {
  const joinMissionBtn = document.getElementById("joinMissionBtn");

  joinMissionBtn.addEventListener("click", () => {
    alert(
      "Thank you for your interest in joining our mission! We'll be in touch soon with more information on how you can get involved."
    );
  });

  const teamPhotos = document.querySelectorAll(".team-photo");
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

  teamPhotos.forEach((img) => {
    img.setAttribute("data-src", img.src);
    img.src =
      "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="; // Placeholder image
    imageObserver.observe(img);
  });
});
