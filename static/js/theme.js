
const themeToggle = document.querySelector(".theme-toggle");

if (themeToggle) {
    const themeIcon = themeToggle.querySelector(".theme-toggle-icon");

    function updateThemeButton(theme) {
        const isDark = theme === "dark";

        themeIcon.textContent = isDark ? "☼" : "☾";
        themeToggle.setAttribute(
            "aria-label",
            isDark ? "Switch to light theme" : "Switch to dark theme"
        );
        themeToggle.setAttribute(
            "title",
            isDark ? "Switch to light theme" : "Switch to dark theme"
        );
    }

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
        document.documentElement.dataset.theme = savedTheme;
    }

    const currentTheme =
        document.documentElement.dataset.theme ||
        (window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light");

    updateThemeButton(currentTheme);

    themeToggle.addEventListener("click", () => {
        const isDark = document.documentElement.dataset.theme === "dark";
        const newTheme = isDark ? "light" : "dark";

        document.documentElement.dataset.theme = newTheme;
        localStorage.setItem("theme", newTheme);
        updateThemeButton(newTheme);
    });
}
