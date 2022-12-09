var numero = parseInt(prompt('Informe o número'))

if(isNaN(numero)){
  alert('Número inválido')
}else {
  var resultado = ''
  for(var i = 0; i<=10; i++){
    resultado += numero + ' x ' + i + ' = ' + (numero * i) + '\n';
    //resultado += `${numero} x ${i} = ${numero *i}\n`;
  }
  alert(resultado);
}