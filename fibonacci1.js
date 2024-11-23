let limite = 10; 
let a = 0;
let b = 1;
let i = 0;

while (i < limite) {
  console.log(a); 
  let siguiente = a + b; 
  a = b; 
  b = siguiente; 
  i++; 
}