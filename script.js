
let ragnatela = document.querySelector(".ragnatela");

ragnatela.addEventListener("mouseover", function () {
    creareRagnatele();
    console.log("creareRagnatele");
});




function creareRagnatele() {
    const ragnateleContainer = document.createElement("div");
    ragnateleContainer.className = "ragnatele-container";
  
    const ragnatele = document.createElement("div");
    ragnatele.className = "ragnatele";
  
    let inizioX = Math.random() * window.innerWidth;
    let inizioY = Math.random() * window.innerHeight;
    let forma = Math.random() * 15 + 10;
    
    ragnatele.style.width = forma + 'px';
    ragnatele.style.height = forma + 'px';
    ragnatele.style.pointerEvents = 'none';
    ragnatele.style.opacity = 0.8;
  
    ragnateleContainer.style.position = 'absolute';
    ragnateleContainer.style.left = inizioX + 'px';
    ragnateleContainer.style.top = inizioY + 'px';
  
    ragnateleContainer.innerHTML = `<svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="spiderweb" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
        <path d="M50,50 L10,10 M50,50 L90,10 M50,50 L10,90 M50,50 L90,90 M50,50 L50,10 M50,50 L90,50 M50,50 L50,90 M50,50 L10,50" stroke="red" stroke-width="2" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#spiderweb)" />
  </svg>`;
  
    ragnateleContainer.appendChild(ragnatele);
    document.body.appendChild(ragnateleContainer);
  
    ragnateleContainer.addEventListener('animationend', function () {
        document.body.removeChild(ragnateleContainer);
    });
  }