document.addEventListener("DOMContentLoaded", () => {
    const hamburgerMenu = document.getElementById("hamburgerMenu");
    const navLinks = document.getElementById("navLinks");

    hamburgerMenu.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });

    const contactForm = document.getElementById("contactForm");
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;

        localStorage.setItem("contactName", name);
        localStorage.setItem("contactEmail", email);

        alert("Dados salvos no Local Storage!");
        contactForm.reset();
    });
});
