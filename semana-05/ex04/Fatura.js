export default class Fatura {
  id;
  descricao;
  quantia;
  preco;
  quantia = 0;
  preco = 0;
}
constructor(id, descricao, quantia, preco);
{
  this.id = id;
  this.descricao = descricao;
  this.quantia = quantia > 0 ? quantia : 0;
  // exemplo teste com if
  if (quantia > 0) {
    this.quantia = quantia;
  }
  // exemplo teste com ternario
  this.preco = preco > 0 ? preco : 0;
}
