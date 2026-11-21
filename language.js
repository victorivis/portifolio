const toggle = document.getElementById("lang-switch");

function syncLanguage() {
    setLanguage(toggle.checked ? "en" : "pt");
}

toggle.addEventListener("change", syncLanguage);
syncLanguage();
