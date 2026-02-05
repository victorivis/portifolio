let chessLoaded = false;
let moduleReady = false;

function loadChess() {
    if (chessLoaded) return;
    chessLoaded = true;
    
    window.Module = {
        canvas: document.getElementById('canvas'),
        print: (function () {
            const element = document.getElementById('output');
            if (element) element.value = '';
            return (...args) => {
                const text = args.join(' ');
                console.log(text);
                if (element) element.value += (text !== '' ? "> " : "") + text + "\n";
                if (element) element.scrollTop = element.scrollHeight;
            };
        })(),
        
        onRuntimeInitialized: function() {
            console.log('Módulo WebAssembly inicializado!');
            moduleReady = true;
            
            if (window.Module._helloCpp) {
                window.helloCpp = window.Module._helloCpp;
            }
            
            window.pausar = function() {
                if (window.Module && window.Module._pausar) {
                    window.Module._pausar();
                }
            };
            
            window.retomar = function() {
                if (window.Module && window.Module._retomar) {
                    window.Module._retomar();
                }
            };
        }
    };

    const script = document.createElement("script");
    script.src = "web-assembler/chess.js";
    script.async = true;
    
    script.onload = () => {
        console.log('Script chess.js carregado');
    };
    
    script.onerror = (error) => {
        console.error('Erro ao carregar chess.js:', error);
    };
    
    document.body.appendChild(script);
}

function pauseChess() {
    if (window.pausar && moduleReady) {
        window.pausar();
    }
}

function resumeChess() {
    if (window.retomar && moduleReady) {
        window.retomar();
    }
}

const chessSection = document.getElementById("chess");

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                loadChess();
                resumeChess();
            } else {
                pauseChess();
            }
        });
    },
    { threshold: 0.3 }
);

observer.observe(chessSection);