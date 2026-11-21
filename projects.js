const CHESS_CONTROLS = {
    title: {pt: "Controles", en: "Controls"},
    items: [
        { key: "z", text: {pt: "Desfazer o último lance", en: "Undo last move"} },
        { key: "i", text: {pt: "Desligar/Ligar IA", en: "Toggle AI on/off"} },
        { key: "v", text: {pt: "Realizar Lance da IA", en: "Make AI move"} },
        { key: "x", text: {pt: "Mostrar histórico de lances", en: "Show move history"} },
        { key: "l", text: {pt: "Listar todos os lances possiveis", en: "List all possible moves"} },
        { key: "k", text: {pt: "Realizar lance aleatório", en: "Make random move"} },
        { key: "o", text: {pt: "Inverter exibicao do tabuleiro", en: "Flip board view"} },
        { key: "w", text: {pt: "Trocar posicoes metade esquerda", en: "Swap positions on the left half"} },
        { key: "a", text: {pt: "Trocar posicoes na vertical", en: "Swap vertical positions"} },
        { key: "d", text: {pt: "Trocar posicoes na vertical", en: "Swap vertical positions"} },
        { key: "s", text: {pt: "Trocar posicoes metade de cima", en: "Swap positions on the upper half"} },
        { key: "c", text: {pt: "Realizar lance do turno oposto", en: "Make opponent’s move"} }
    ]
};

const PORTFOLIO = [
    {
        projects: [
            {
                title: "Trivolt",
                team: "Victor Ivis",
                description: {
                    pt: "Este projeto é uma engine 3D desenvolvida do zero para o navegador utilizando apenas JavaScript e a Canvas API nativa do HTML. Além das formas geométricas primitivas desenvolvidas para a classe Polyedra é possível carregar objetos customizados no formato obj acessando o projeto original. Abaixo segue uma demonstração dele sendo utilizado para renderizar um pequeno jogo.",
                    en: "This project is a 3D engine developed from scratch for the browser using only JavaScript and the native HTML Canvas API. In addition to the primitive geometric shapes developed for the Polyedra class, it is also possible to load custom objects in the .obj format by accessing the original project. Below is a demonstration of the engine being used to render a mini-game."
                },
                demo: {
                    elements: ["trivolt-section"]
                },
                link: "https://github.com/victorivis/trivolt"
            },
            {
                title: "MedLink",
                team: "Alexandre Gonçalvez, Rafael Vazquez, Victor Ivis",
                description: {
                    pt: "Plataforma web de telemedicina com Angular e Spring Boot, incluindo triagem, agendamento de consultas e processamento de dados via IA, além de videochamadas integradas ao ZegoCloud, escolhido pela sua modularidade e melhor custo-benefício.",
                    en: "Telemedicine web platform with Angular and Spring Boot, featuring triage, appointment scheduling, and AI-powered data processing, as well as video calls integrated with ZegoCloud, selected for its modularity and cost-effectiveness."
                },
                images: [
                    "img/medlink/medlink1.png",
                    "img/medlink/medlink2.png",
                    "img/medlink/medlink3.png",
                    "img/medlink/medlink4.png",
                    "img/medlink/medlink5.png",
                    "img/medlink/medlink6.png"
                ]
            },
            {
                title: "BikeShare Connect",
                team: "Daniel Lima, João Gabriel, Victor Ivis",
                description: {
                    pt: "Uma aplicação web mobile para controle de bicicletas coletivas, idealizado para transformar o transporte urbano em uma solução mais inclusiva e sustentável. Para a API REST, foi utilizado TypeScript com o MongoDB como banco de dados e o Redis para otimização das consultas com um cache. No frontend, utilizou-se SCSS para automatização de alguns recursos gráficos. Também é possível visualizar as informações geoespaciais no navegador por charts do Mongo Atlas.",
                    en: "A mobile web application for shared bike management, designed to transform urban transport into a more inclusive and sustainable solution. For the REST API, TypeScript was used with MongoDB as the database and Redis for query optimization via caching. On the frontend, SCSS was used to automate some visual resources. Geospatial information is also displayed in the browser through Mongo Atlas charts."
                },
                images: [
                    "img/bikeshare1.png",
                    "img/bikeshare2.png",
                    "img/bikeshare3.png",
                    "img/bikeshare4.png",
                    "img/bikeshare5.png",
                    "img/bikeshare6.png",
                    "img/bikeshare7.png",
                    "img/bikeshare8.png"
                ],
                activeImage: 1,
                link: "https://github.com/victorivis/BikeShare-Connect.git"
            },
            {
                title: "Prometheus",
                team: "Luiz Fernando, José Anderson, Victor Ivis",
                description: {
                    pt: "Uma aplicação REST para gerenciamento e divulgação de eventos. Permite que os moderadores vejam os inscritos e gerem certifados ao fim das atividades para os usuários que participaram. Atuei na parte de desenvolvimento das funções de CRUD na API utilizando o framework Spring Boot. Também ajudei a conectar os endpoints no front-end em React e fiz alguns ajustes nos formulários para envio das informações ao banco de dados PostgreSQL.",
                    en: "A REST application for managing and promoting events. It allows moderators to view participants and generate certificates for users at the end of activities. I worked on developing CRUD operations in the API using the Spring Boot framework. I also helped connect frontend endpoints in React and made adjustments to forms to send data to a PostgreSQL database."
                },
                images: [
                    "img/prometheus1.jpeg",
                    "img/prometheus2.jpeg",
                    "img/prometheus3.jpeg",
                    "img/prometheus4.jpeg"
                ],
                link: "https://github.com/POO-ADS-IFPB-CZ/projeto-final-prometheus"
            },
            {
                title: "Playground",
                team: "Victor Ivis",
                description: {
                    pt: "Um conjunto de programas feitos por diversão. Todos eles foram escritos em C ou C++ utilizando a biblioteca SDL2 para renderização gráfica e controle de eventos. Segue uma demonstração do jogo de xadrez presente nesse respositório. Ele utiliza um algoritmo de minimax simples para calcular os lances da máquina e foi compilado em web assembler para poder funcionar em qualquer navegador.",
                    en: "A collection of programs made for fun. All of them were written in C or C++ using the SDL2 library for graphics rendering and event handling. Here's a demo of the chess game included in this repository. It uses a simple minimax algorithm to calculate AI moves and was compiled to WebAssembly to run on any browser."
                },
                demo: {
                    elements: ["chess", "output"],
                    controls: CHESS_CONTROLS,
                    controlsHost: "chess"
                },
                link: "https://github.com/victorivis/playground"
            },
            {
                title: {
                    pt: "Aplicativo para Controle de Gastos",
                    en: "Expense Tracker App"
                },
                team: "Cauã Pires, Daniel Lima, Victor Ivis",
                description: {
                    pt: "Um aplicativo bem simples que permite guardar despesas e lucros para visualizar graficamente a situação financeira do usuário. Atuei no backend fazendo a parte de armazenamento dos dados, que é bastante simples porque não utilizou qualquer banco de dados, mas apenas o próprio local storage. Também fiz toda a parte de geração dos gráficos usando a biblioteca Chart.js e ainda auxiliei nos pop-ups que foram feitos com a biblioteca SweetAlert2.",
                    en: "A simple app that allows users to save expenses and income and visualize their financial situation through charts. I worked on the backend, handling data storage, which was kept simple by using local storage instead of a database. I also implemented the charts using Chart.js and helped create the pop-ups with SweetAlert2."
                },
                images: [
                    "img/financas1.png",
                    "img/financas2.png"
                ],
                link: "https://github.com/Gerencia-de-configuracao-e-mudancas/projeto-final-grupogt/"
            },
            {
                title: {
                    pt: "Framework de Jogos",
                    en: "Game Framework"
                },
                team: "Victor Ivis",
                description: {
                    pt: "Uma game engine simples em C++ feita com SDL2. O mapa é carregado usando um arquivo xml que guarda as posições no formato csv. As colisões são lidadas pelo algorítmo AABB e existe a implementação da física para gravidade, atrito, movimentação na diagonal usando seno e cosseno e outros funcionalidades que estão em desenvolvimento. Existe uma versão compilada tanto para windows quanto para linux na aba de tags.",
                    en: "A simple game framework in C++ built with SDL2. The map is loaded using an XML file that stores positions in CSV format. Collisions are handled using the AABB algorithm, and physics are implemented for gravity, friction, diagonal movement using sine and cosine, among other features currently in development. A compiled version is available for both Windows and Linux under the tags section."
                },
                images: [
                    "img/game-engine1.png",
                    "img/game-engine2.png",
                    "img/game-engine3.png",
                    "img/game-engine4.png"
                ],
                link: "https://github.com/victorivis/modelo-jogos"
            }
        ]
    },
    {
        heading: {
            pt: "Outros",
            en: "Others"
        },
        projects: [
            {
                title: {
                    pt: "Lei de Zipf",
                    en: "Zipf's Law"
                },
                team: "Victor Ivis",
                description: {
                    pt: "Uma apresentação feita com o Jupyter Lab utilizando a biblioteca MatPlotLib do python para os gráficos da distribuição da lei de zipf em diversos livros como Alice no País das Maravilhas, Críton, Dom Casmurro e outros. Essa lei diz que a 2ª palavra mais frequente aparece metade das vezes que a primeira, a 3ª aparece um terço da primeira e assim por diante. Esse conceito tem diversas aplicações na área da estatística como detecção de plágios, processamento de linguagem natural e até previsão do comportamento de populações.",
                    en: "A presentation created with Jupyter Lab using Python's MatPlotLib library to display Zipf's law distribution in various books such as Alice in Wonderland, Crito, Dom Casmurro, and others. This law states that the second most frequent word appears half as often as the first, the third appears one third as often, and so on. This concept has many applications in statistics, such as plagiarism detection, natural language processing, and population behavior prediction."
                },
                images: [
                    {
                        src: "img/zipf1.png",
                        alt: {
                            pt: "Distribuicao para Dom Casmurro",
                            en: "Distribution for Dom Casmurro"
                        }
                    },
                    {
                        src: "img/zipf2.png",
                        alt: {
                            pt: "Distribuicao agrupada em pares",
                            en: "Grouped distribution in pairs"
                        }
                    },
                    {
                        src: "img/zipf3.png",
                        alt: {
                            pt: "Distribuicao para Criton de Platao",
                            en: "Distribution for Plato's Crito"
                        }
                    },
                    {
                        src: "img/zipf4.png",
                        alt: {
                            pt: "Distribuicao para Alice no Pais das Maravilhas",
                            en: "Distribution for Alice in Wonderland"
                        }
                    },
                    {
                        src: "img/zipf5.png",
                        alt: {
                            pt: "Imagem do aplicativo 4",
                            en: "App image 4"
                        }
                    }
                ],
                link: "https://github.com/victorivis/lei-de-zipf"
            }
        ]
    }
];
