document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");
  const faqList = document.getElementById("faqList");

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    const formValues = Object.fromEntries(formData.entries());

    console.log("Form submitted:", formValues);
    alert("Thank you for your message! We will get back to you soon.");
    contactForm.reset();
  });

  const faqs = [
    {
      question: "What is sustainable travel?",
      answer:
        "Sustainable travel is an approach to tourism that aims to minimize negative impacts on the environment and local communities while maximizing positive contributions to the destinations visited.",
    },
    {
      question: "How can I reduce my carbon footprint while traveling?",
      answer:
        "You can reduce your carbon footprint by choosing eco-friendly transportation, staying in sustainable accommodations, minimizing waste, and supporting local conservation efforts.",
    },
    {
      question: "Do you offer eco-friendly travel packages?",
      answer:
        "While we don't directly offer travel packages, we provide information and resources to help you plan sustainable trips. Check our Destinations page for eco-friendly travel ideas.",
    },
    {
      question: "How can I get involved in sustainable tourism initiatives?",
      answer:
        "You can get involved by volunteering for conservation projects, supporting local communities, choosing eco-certified tour operators, and spreading awareness about sustainable travel practices.",
    },
  ];

  faqs.forEach((faq, index) => {
    const faqItem = document.createElement("div");
    faqItem.className = "faq-item";
    faqItem.innerHTML = `
            <div class="faq-question" data-faq="${index}">
                ${faq.question}
                <span class="material-symbols-outlined">expand_more</span>
            </div>
            <div class="faq-answer">${faq.answer}</div>
        `;
    faqList.appendChild(faqItem);
  });

  faqList.addEventListener("click", (e) => {
    const question = e.target.closest(".faq-question");
    if (question) {
      const faqItem = question.parentElement;
      faqItem.classList.toggle("active");
    }
  });

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const subjectInput = document.getElementById("subject");
  const messageInput = document.getElementById("message");

  function validateInput(input, regex, errorMessage) {
    const isValid = regex.test(input.value);
    if (!isValid) {
      input.setCustomValidity(errorMessage);
    } else {
      input.setCustomValidity("");
    }
    return isValid;
  }

  nameInput.addEventListener("input", () =>
    validateInput(
      nameInput,
      /^[a-zA-Z\s]{2,}$/,
      "Please enter a valid name (at least 2 characters, letters only)"
    )
  );
  emailInput.addEventListener("input", () =>
    validateInput(
      emailInput,
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      "Please enter a valid email address"
    )
  );
  subjectInput.addEventListener("input", () =>
    validateInput(
      subjectInput,
      /^.{5,}$/,
      "Subject must be at least 5 characters long"
    )
  );
  messageInput.addEventListener("input", () =>
    validateInput(
      messageInput,
      /^[\s\S]{10,}$/,
      "Message must be at least 10 characters long"
    )
  );
});
