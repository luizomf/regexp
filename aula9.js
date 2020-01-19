const { lookahead } = require('./base');

console.log(lookahead);

// Todas as palavras
// console.log(lookahead.match(/[\wÀ-ú]+/g))

// Todas as palavras antes do ponto
console.log(lookahead.match(/[\wÀ-ú]+(?=\.)/g));

// Todas as palavras antes do ponto ou da vírgula
console.log(lookahead.match(/[\wÀ-ú]+(?=[.,])/g));

// Todos os nomes cujo próximo nome é Otávio
console.log(lookahead.match(/^[\wÀ-ú]+(?=\s*Otávio)/gm));

// Todas as palavras que NÃO VEM antes do ponto
console.log(lookahead.match(/[\wÀ-ú]+(?![\wÀ-ú.,]+)/g));

