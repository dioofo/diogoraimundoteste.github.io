
//CUSTOM CURSOR
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

// LOADER ANIMATION
const loader = document.querySelector('.loader');

// Save scroll position
const scrollY = window.scrollY || document.documentElement.scrollTop;

loader.addEventListener('animationend', () => {
  // Hide loader
  loader.style.display = 'none';

  // Remove scroll lock
  document.body.classList.remove('lock-scroll');

  // Restore scroll position (optional)
  window.scrollTo(0, scrollY);
});

// LOCOMOTIVE SCROLL - SMOOTH SCROLL
let scrollAmount = window.scrollY || 0;
let targetScroll = scrollAmount;
let isScrolling = false;

window.addEventListener('wheel', function(event) {
  event.preventDefault();  // Evita scroll padrão
  targetScroll += event.deltaY;
  
  // Limita o scroll ao tamanho da página
  targetScroll = Math.max(0, Math.min(targetScroll, document.body.scrollHeight - window.innerHeight));
  
  if (!isScrolling) {
    isScrolling = true;
    requestAnimationFrame(smoothScroll);
  }
}, { passive: false });

function smoothScroll() {
  scrollAmount += (targetScroll - scrollAmount) * 0.08; // acelera a interpolação

  window.scrollTo(0, scrollAmount);

  if (Math.abs(scrollAmount - targetScroll) > 0.5) {
    requestAnimationFrame(smoothScroll);
  } else {
    isScrolling = false;
  }
}