
/*Diogo Pinto Raimundo (3220550)

Data
08 junho 2025 

Nome do Exercício
- Portfolio

Época de Avaliação (escolher uma abaixo e apagar as restantes)
- Continua (durante as aulas)

Ano Letivo (3º, 2024-2025), 
Semestre (2º), 
Unidade Curricular (Laboratório de Projeto II), 
Curso (DGM), 
Escola (ESAD.CR), 
Docente (Marco Heleno).*/

// CUSTOM CURSOR
// Este evento é ativado sempre que o utilizador move o rato.
window.addEventListener("mousemove", (e) => {

  // Vai buscar os dois elementos do cursor (pequeno e grande) personalizado.
  const cursorDot = document.getElementById("data-cursor-dot");
  const cursorOutline = document.getElementById("data-cursor-outline");

  // Guarda as coordenadas atuais do rato (posição no ecrã).
  const posX = e.clientX;
  const posY = e.clientY;

  // Atualiza a posição do ponto central do cursor (sem delay).
  setTimeout(() => {
      cursorDot.style.left = `${posX}px`;
      cursorDot.style.top = `${posY}px`;
  }, 0);

  // Atualiza a posição do cursor grande com um pequeno atraso (efeito trailing).
  setTimeout(() => {
      cursorOutline.style.left = `${posX}px`;
      cursorOutline.style.top = `${posY}px`;
  }, 100);

  // Para cada link <a> na página, define o comportamento do cursor ao passar por cima.
  document.querySelectorAll("a").forEach(link => {
      // Quando o rato entra num link
      link.addEventListener("mouseenter", () => {
          // Volta a ir buscar os elementos
          const cursorDot = document.getElementById("data-cursor-dot");
          const cursorOutline = document.getElementById("data-cursor-outline");

          // Aumenta o cursor pequeno e altera o blending mode para difference.
          cursorDot.style.transform = "translate(-50%, -50%) scale(20)";
          cursorDot.style.mixBlendMode = "difference";

          // Também aumenta o tamanho do cursor grande.
          cursorOutline.style.transform = "translate(-50%, -50%) scale(2)";
      });

      // Quando o rato sai do link
      link.addEventListener("mouseleave", () => {
          // Restaura e volta ao estado default dos cursors
          cursorDot.style.transform = "translate(-50%, -50%) scale(1)";
          cursorDot.style.mixBlendMode = "normal";
          cursorOutline.style.transform = "translate(-50%, -50%) scale(1)";
      });
  });

});

// LOADER ANIMATION
// Vai buscar o elemento do loader
const loader = document.querySelector('.loader');

// Guarda a posição atual do scroll antes de ocultar o loader
const scrollY = window.scrollY || document.documentElement.scrollTop;

// Quando a animação do loader termina...
loader.addEventListener('animationend', () => {
  // Esconde o loader para mostrar o resto do site.
  loader.style.display = 'none';

  // Remove a classe que impede o scroll
  document.body.classList.remove('lock-scroll');

  // Restaura a posição do scroll, caso tenha sido alterada
  window.scrollTo(0, scrollY);
});

// LOCOMOTIVE SCROLL - SMOOTH SCROLL
// Implementa um scroll suave personalizado, estilo "locomotive".

// Variável que guarda a posição atual do scroll.
let scrollAmount = window.scrollY || 0;

// Variável que indica onde o scroll deveria ir.
let targetScroll = scrollAmount;

// Flag para indicar se já está em processo de scroll (evita múltiplas animações ao mesmo tempo).
let isScrolling = false;

// Sempre que o utilizador usa a roda do rato...
window.addEventListener('wheel', function(event) {
  event.preventDefault(); // Impede o comportamento padrão do browser (scroll automático).

  // Ajusta o destino do scroll com base no movimento da roda.
  targetScroll += event.deltaY;

  // Limita o destino dentro dos limites do documento (para não ultrapassar o topo ou fim da página).
  targetScroll = Math.max(0, Math.min(targetScroll, document.body.scrollHeight - window.innerHeight));
  
  // Se não estiver a fazer scroll, inicia a animação.
  if (!isScrolling) {
    isScrolling = true;
    requestAnimationFrame(smoothScroll);
  }
}, { passive: false }); // `passive: false` é necessário para poder usar `preventDefault`

// Função de scroll suave com interpolação.
function smoothScroll() {
  // Faz a interpolação entre a posição atual e a posição alvo (dá o efeito de suavidade).
  scrollAmount += (targetScroll - scrollAmount) * 0.08;

  // Aplica o scroll no ecrã.
  window.scrollTo(0, scrollAmount);

  // Se ainda não chegou ao destino, continua a animação.
  if (Math.abs(scrollAmount - targetScroll) > 0.5) {
    requestAnimationFrame(smoothScroll);
  } else {
    // Quando estiver suficientemente perto, termina a animação.
    isScrolling = false;
  }
}