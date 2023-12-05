// --------------- PRÁTICA GUIADA ---------------

//###-------------------------------Prática 1
/* //const bimestre1 = [9,8,6,8]; 31
//const bimestre2 = [5,8,4,3]; 20
//const bimestre3 = [8,2,6,7]; 23
//const bimestre4 = [9,9,9,7]; 34

const notasDoAno = [[9,8,6,8],[5,8,4,3],[8,2,6,7],[9,9,9,7]];
const notasSomaBimestre =[];

for (let i = 0; i < notasDoAno.length; i++){
  let somaBimestre = 0;
  const arrayNotas = [] = notasDoAno[i];
  for (let j = 0; j < arrayNotas.length; j++){
    somaBimestre += arrayNotas[j];
  }
notasSomaBimestre.push(somaBimestre)
console.log(`A soma das notas do Bimestre ${i+1} é ${notasSomaBimestre[i]}\na média do Bimestre ${i+1} = ${notasSomaBimestre[i]/4} \n`);
}; */

//###-------------------------------Prática 2

const notasDoAno = [[9,8,6,8],[5,8,4,3],[8,2,6,7],[9,9,9,7]];
const notasSomaBimestre =[];
let bimestre = 0;

for (let arr in notasDoAno){
  let somaBimestre = 0;
  const arrayNotas = [] = notasDoAno[bimestre];

  for (let j = 0; j < arrayNotas.length; j++){
    somaBimestre += arrayNotas[j];
  }

notasSomaBimestre.push(somaBimestre)
console.log(`A soma das notas do Bimestre ${bimestre+1} é ${notasSomaBimestre[bimestre]}\na média do Bimestre ${bimestre+1} = ${notasSomaBimestre[bimestre]/4} \n`);

bimestre++;
};









// --------------- EXERCÍCIO DE FIXAÇÃO ---------------
const filmes = [
  {
    titulo: 'O Auto da Compadecida',
    ano: 2000,
    diretor: 'Guel Arraes',
    elenco: [
      'Selton Mello',
      'Mateus Nachtergaele',
      'Marco Nanini',
      'Fernanda Montenegro',
    ],
  },
  {
    titulo: 'Carandiru',
    ano: 2001,
    diretor: 'Hector Babenco',
    elenco: [
      'Wagner Moura',
      'José Carlos Vasconcelos',
      'Ailton Graça',
      'Caio Blat',
    ],
  },
  {
    titulo: 'Aquarius',
    ano: 2012,
    diretor: 'Kléber Mendonça Filho',
    elenco: [
      'Sônia Braga',
      'Humberto Carrão',
      'Maeve Jinkings',
      'Bárbara Colen',
    ],
  },
]

// escreva seu código abaixo 👇🏻