const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");
const kungFuDropdown = document.querySelector(".nav-item.dropdown");
const dropdownToggle = document.querySelector(".dropdown-toggle");

if (menuButton && navLinks) {
    menuButton.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("mobile-open");
        menuButton.setAttribute("aria-expanded", String(isOpen));
    });
}

if (dropdownToggle && kungFuDropdown) {
    dropdownToggle.addEventListener("click", (event) => {
        // On touch/mobile layouts, clicking Kung Fu opens/closes its submenu.
        if (window.matchMedia("(max-width: 900px)").matches) {
            event.preventDefault();

            const isOpen = kungFuDropdown.classList.toggle("open");
            dropdownToggle.setAttribute("aria-expanded", String(isOpen));
        }
    });
}

document.addEventListener("click", (event) => {
    if (
        kungFuDropdown &&
        !kungFuDropdown.contains(event.target) &&
        window.matchMedia("(max-width: 900px)").matches
    ) {
        kungFuDropdown.classList.remove("open");

        if (dropdownToggle) {
            dropdownToggle.setAttribute("aria-expanded", "false");
        }
    }
});
