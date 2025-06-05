let hellos_container_element, hellos_element;
let hellos, temp_hellos_random_index, hellos_random_index;

function setup() 
{
  noCanvas();
  
  temp_hellos_random_index = 0;
  hellos_random_index = 0;
  
  hellos = [];
  hellos[0] = "olá";
  hellos[1] = "hello";
  hellos[2] = "bem-vindo";
  hellos[3] = "welcome";
  
  hellos_container_element = select("#hellos_container");
}

function draw() 
{
  if (select("#hellos") != null) 
  {
    hellos_element = select ("#hellos");
    hellos_element.remove();
  }
  else 
  {
    frameRate (0.5);
  }
  
  while (temp_hellos_random_index === hellos_random_index) 
  {
    temp_hellos_random_index = int( random(0,hellos.length) );
  }
  
  hellos_random_index = temp_hellos_random_index;
  
  hellos_element = createP (hellos[hellos_random_index]);
  hellos_element.id ("hellos");
  
  hellos_element.parent (hellos_container_element);
}