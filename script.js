window.addEventListener("mousemove", (e)=>{

    const cursorDot = document.getElementById("data-cursor-dot");
    const cursorOutline = document.getElementById("data-cursor-outline");

    const posX = e.clientX;
    const posY = e.clientY;

    setTimeout(()=>{
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;
    },0)

    setTimeout(()=>{
        cursorOutline.style.left = `${posX}px`;
        cursorOutline.style.top = `${posY}px`;
    },100)

    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("mouseenter", () => {
            const cursorDot = document.getElementById("data-cursor-dot");
            const cursorOutline = document.getElementById("data-cursor-outline");
            
            cursorDot.style.transform = "translate(-50%, -50%) scale(20)";
            cursorDot.style.mixBlendMode = "difference";
            cursorOutline.style.transform = "translate(-50%, -50%) scale(2)";
        });
        
        link.addEventListener("mouseleave", () => {
            const cursorDot = document.getElementById("data-cursor-dot");
            const cursorOutline = document.getElementById("data-cursor-outline");
            
            cursorDot.style.transform = "translate(-50%, -50%) scale(1)";
            cursorDot.style.mixBlendMode = "normal";
            cursorOutline.style.transform = "translate(-50%, -50%) scale(1)";
            
        });
    });

});

