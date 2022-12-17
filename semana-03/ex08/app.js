console.log('e08-s03-m1');

// Resolução:

const uneDobraRetorna = (vetor, ...resto) => {
  // const dobrado = [];
  // for (let i = 0; i < resto.length; i++) {
  //   dobrado.push(resto[i] * 2);
  // }

  // alternativa com map
  const dobrado = resto.map(num => num * 2);

  return [...vetor, ...dobrado];
};

const r1 = uneDobraRetorna([1, 2, 3], 4, 4)
console.log(r1) // [1, 2, 3, 8, 8]

const r2 = uneDobraRetorna([2], 10, 4, 8) 
console.log(r2) // [2, 20, 8, 16]

const r3 = uneDobraRetorna([6, 8]) 
console.log(r3) // [6, 8]