let numeroBuscado = 9857;  
let a = 0;
let b = 1;
let iteraciones = 0;
let numeroCercano = a;

while (a <= numeroBuscado) { 
  iteraciones++; 
  if (a === numeroBuscado) {
    console.log(`El número ${numeroBuscado} sí existe en la secuencia y se encontró en ${iteraciones} iteraciones.`);
    break;
  }
  numeroCercano = a; 
  let siguiente = a + b;
  a = b;
  b = siguiente;
}

if (a > numeroBuscado) {
  console.log(`El número ${numeroBuscado} no está en la secuencia. Se hicieron ${iteraciones} iteraciones y el número más cercano es el ${numeroCercano}.`);
}