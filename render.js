const ARROW_LEFT = "❮";
const ARROW_RIGHT = "❯";

function createElement(tag, className, children = []) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    element.append(...children);
    return element;
}

function createText(tag, className, text) {
    return bind(createElement(tag, className), text);
}

function createSection(title, content) {
    return createElement("div", "section", [
        createText("div", "section-title", title),
        ...content
    ]);
}

function createTeam(team) {
    const paragraph = createElement("p");
    paragraph.textContent = team;
    return createSection(ui("team"), [createElement("div", "team", [paragraph])]);
}

function createDescription(description) {
    const paragraph = createText("p", null, description);
    return createSection(ui("description"), [createElement("div", "description", [paragraph])]);
}

function createArrow(direction, symbol) {
    const button = createElement("button", `arrow arrow-${direction < 0 ? "left" : "right"}`);
    button.textContent = symbol;
    button.addEventListener("click", event => changeImage(direction, event));
    return button;
}

function createImage(image, isActive) {
    const source = typeof image === "string" ? { src: image } : image;
    const element = createElement("img", isActive ? "active" : null);
    element.setAttribute("src", source.src);
    if (source.alt) bind(element, source.alt, "alt");
    return element;
}

function createGallery(images, activeIndex = 0) {
    const pictures = images.map((image, index) => createImage(image, index === activeIndex));
    return createSection(ui("images"), [
        createElement("div", "images", [
            ...pictures,
            createArrow(-1, ARROW_LEFT),
            createArrow(1, ARROW_RIGHT)
        ])
    ]);
}

function createControls(controls) {
    const items = controls.items.map(item => {
        const key = createElement("strong");
        key.textContent = item.key;
        const description = bind(document.createTextNode(""), item.text);
        return createElement("p", null, [key, " ", description]);
    });
    return createElement("span", null, [createText("h3", null, controls.title), ...items]);
}

function createDemo(demo) {
    const elements = demo.elements.map(id => document.getElementById(id));
    if (demo.controls) {
        const controls = createControls(demo.controls);
        controls.id = "controls";
        document.getElementById(demo.controlsHost).appendChild(controls);
    }
    return createSection(ui("demo"), elements);
}

function createLink(url) {
    const anchor = createText("a", null, ui("github"));
    anchor.href = url;
    anchor.target = "_blank";
    return createSection(ui("link"), [createElement("div", "github-link", [anchor])]);
}

function createProject(project) {
    const sections = [
        createText("div", "project-title", project.title),
        createTeam(project.team),
        createDescription(project.description)
    ];
    if (project.images) sections.push(createGallery(project.images, project.activeImage));
    if (project.demo) sections.push(createDemo(project.demo));
    if (project.link) sections.push(createLink(project.link));
    return createElement("div", "portfolio-container", sections);
}

function createGroup(group) {
    const heading = group.heading ? [createText("h1", null, group.heading)] : [];
    return [...heading, ...group.projects.map(createProject)];
}

function renderPortfolio(container, groups) {
    groups.forEach(group => container.append(...createGroup(group)));
}

renderPortfolio(document.getElementById("portfolio"), PORTFOLIO);
document.getElementById("demos").remove();
