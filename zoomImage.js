const portifoliosImg = document.getElementsByClassName("images");
const lenImg = portifoliosImg.length
const zoomedArray = new Array(lenImg).fill(false);

function moveZoom(event, currentNode){    
    const mouseX = event.offsetX;
    const mouseY = event.offsetY;
    const w = currentNode.clientWidth;
    const h = currentNode.clientHeight;

    currentNode.style.setProperty("--posX", mouseX*100/w + "%");
    currentNode.style.setProperty("--posY", mouseY*100/h + "%");
}

for(let i=0; i<lenImg; i++){
    const currentPortifolio = portifoliosImg[i];
    const images = currentPortifolio.querySelectorAll('.images img');
    const activeIndex = Array.from(images).findIndex(img => img.classList.contains('active'));
    const imgSrc = images[activeIndex].getAttribute("src")
    currentPortifolio.style.setProperty("--url", `url(${imgSrc})`);
    

    currentPortifolio.addEventListener("click", (event)=>{
        zoomedArray[i] = !zoomedArray[i];
        
        if(zoomedArray[i]){
            moveZoom(event, currentPortifolio);
            portifoliosImg[i].style.setProperty("--visibility", "block");
            currentPortifolio.style.setProperty("cursor", "zoom-out");
        }
        else{
            portifoliosImg[i].style.setProperty("--visibility", "none");
            currentPortifolio.style.setProperty("cursor", "zoom-in");
        }
    });

    currentPortifolio.addEventListener("mouseover", (event)=>{
        const currentClass = event.target.getAttribute("class");

        //Do not zoom if over a an arrow
        if(zoomedArray[i] && currentClass.includes("arrow")==false){
            currentPortifolio.style.setProperty("--visibility", "block");
            currentPortifolio.style.setProperty("cursor", "zoom-out");
        }
        else{
            currentPortifolio.style.setProperty("--visibility", "none");
            currentPortifolio.style.setProperty("cursor", "zoom-in");
        }        
    });

    currentPortifolio.addEventListener("mousemove", (event)=>{
        if(zoomedArray[i]){
            moveZoom(event, currentPortifolio);
        }
    });
    
    currentPortifolio.addEventListener("mouseleave", ()=>{
        currentPortifolio.style.setProperty("--visibility", "none");
    });
}