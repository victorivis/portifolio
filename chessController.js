var Module = {
    print: (function() {
    var element = document.getElementById('output');
    if (element) element.value = '';
    return (...args) => {
        var text = args.join(' ');
        console.log(text);
        if (element) {
            element.value += (text!='' ? "> " : "") + text + "\n";
            element.scrollTop = element.scrollHeight; // Imprime embaixo
        }
    };
    })(),
    canvas: (() => {
        var canvas = document.getElementById('canvas');
        canvas.addEventListener("webglcontextlost", (e) => { alert('WebGL context lost. You will need to reload the page.'); e.preventDefault(); }, false);
        return canvas;
    })()
};