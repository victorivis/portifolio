const DEFAULT_LANGUAGE = "en";

const UI = {
    pt: {
        team: "Equipe",
        description: "Descrição",
        images: "Imagens do Aplicativo",
        link: "Link do Projeto",
        github: "Veja no GitHub",
        demo: "Demonstração"
    },
    en: {
        team: "Team",
        description: "Description",
        images: "App Images",
        link: "Project Link",
        github: "View on GitHub",
        demo: "Demo"
    }
};

const bindings = [];
let currentLanguage = DEFAULT_LANGUAGE;

function ui(key) {
    const text = {};
    for (const language in UI) {
        text[language] = UI[language][key];
    }
    return text;
}

function localize(text, language) {
    return typeof text === "string" ? text : text[language];
}

function applyBinding(binding) {
    const value = localize(binding.text, currentLanguage);
    if (binding.attribute) {
        binding.target.setAttribute(binding.attribute, value);
    } else {
        binding.target.textContent = value;
    }
}

function bind(target, text, attribute) {
    const binding = { target, text, attribute };
    bindings.push(binding);
    applyBinding(binding);
    return target;
}

function setLanguage(language) {
    currentLanguage = language;
    bindings.forEach(applyBinding);
}
