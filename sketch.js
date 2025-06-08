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


// Variáveis para guardar os elementos HTML e os textos
let hellos_container_element, hellos_element;
let hellos, temp_hellos_random_index, hellos_random_index;

function setup() 
{
  // Não criamos uma tela gráfica (canvas), porque só vamos mexer com HTML
  noCanvas();
  
  // Inicializamos os índices a 0 — isto serve para garantir que depois conseguimos comparar
  temp_hellos_random_index = 0;
  hellos_random_index = 0;
  
  // Criamos um array com várias saudações
  hellos = [];
  hellos[0] = "olá";
  hellos[1] = "hello";
  hellos[2] = "bem-vindo";
  hellos[3] = "welcome";
  
  // Guardamos uma referência ao elemento HTML onde vamos pôr os textos
  hellos_container_element = select("#hellos_container");
}

function draw() 
{
  // Verificamos se já existe um elemento com o ID "hellos"
  if (select("#hellos") != null) 
  {
    // Se existir, removemos esse elemento (ou seja, apagamos o parágrafo atual)
    hellos_element = select("#hellos");
    hellos_element.remove();
  }
  else 
  {
    // Se ainda não existir (caso raro no início), reduzimos a taxa de frames
    // para evitar que o draw corra demasiado rápido
    frameRate(0.5);  // Só corre duas vezes por segundo
  }
  
  // Aqui garantimos que a próxima saudação escolhida é diferente da anterior
  while (temp_hellos_random_index === hellos_random_index) 
  {
    // Escolhe um índice aleatório entre 0 e o número de saudações
    temp_hellos_random_index = int(random(0, hellos.length));
  }
  
  // Atualizamos o índice principal com o novo valor
  hellos_random_index = temp_hellos_random_index;
  
  // Criamos um novo elemento <p> com a saudação aleatória escolhida
  hellos_element = createP(hellos[hellos_random_index]);

  // Atribuímos o ID "hellos" ao novo parágrafo (para o podermos identificar depois)
  hellos_element.id("hellos");

  // Adicionamos o novo parágrafo como filho do elemento principal no HTML
  hellos_element.parent(hellos_container_element);
}