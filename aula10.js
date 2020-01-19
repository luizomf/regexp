// Encontra todas as palavras
const palavrasRegEx = /([\wÀ-ú]+)/g

// Não números
const naoNumerosRegEx = /\D/g

// Valida IP
const ipRegExp = /((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)/g;

// Valida CPF
const cpfRegExp = /(?:\d{3}\.){2}\d{3}-\d{2}/g

// Valida telefones
const validaTelefone = /^(\(\d{2}\)\s*)?(9\s*)?(\d{4})-(\d{4})$/g

// Validar senhas fortes
const validaSenhasFortes = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%\]\)]).{8,}$/g

// ##################################
// # Validar e-mails (use a última) #
// ##################################

// [^\s]+@[^\s]+\.[^\s]+(\w+)* (Hiper Permissiva)

// Essa expressão é bem permissiva, menos que a anterior, 
// Mas ainda detecta bastante e-mails inválidos
// [^\s\.]+\.?[^\s\.]+@[^\s]+\.[^\s]+\w+

// Em meus testes a regexp que obteve melhor resultado 
// (acertando mais válidos e inválidos) 
// Foi a da linha a seguir:
// /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const validaEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
