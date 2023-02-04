export default class Funcionario {
  cpf;
  nomeCompleto;
  salario;

  constructor(cpf, nomeCompleto, salario) {
    console.log(Funcionario.validarCPF(cpf));
    this.cpf = cpf;
    this.nomeCompleto = nomeCompleto;
    this.salario = salario;
  }

  promover(percentual) {
    // const multiplicador = percentual / 100 + 1;
    // const novoSalario = this.salario * multiplicador;
    // this.salario = novoSalario;
    this.salario *= percentual / 100 + 1;
  }

  static validarCPF(cpfOriginal) {
    const cpf = cpfOriginal.replace(/[^\d]+/g, '');

    if (cpf == '') {
      return false;
    }

    // Elimina CPFs invalidos conhecidos
    if (
      cpf.length !== 11 ||
      cpf === '00000000000' ||
      cpf === '11111111111' ||
      cpf === '22222222222' ||
      cpf === '33333333333' ||
      cpf === '44444444444' ||
      cpf === '55555555555' ||
      cpf === '66666666666' ||
      cpf === '77777777777' ||
      cpf === '88888888888' ||
      cpf === '99999999999'
    ) {
      return false;
    }

    // Valida 1o digito
    let add = 0;
    let rev;

    for (let i = 0; i < 9; i++) {
      add += parseInt(cpf.charAt(i)) * (10 - i);
    }
    rev = 11 - (add % 11);
    if (rev === 10 || rev === 11) {
      rev = 0;
    }
    if (rev !== parseInt(cpf.charAt(9))) {
      return false;
    }

    // Valida 2o digito
    add = 0;
    for (let i = 0; i < 10; i++) {
      add += parseInt(cpf.charAt(i)) * (11 - i);
    }
    rev = 11 - (add % 11);
    if (rev === 10 || rev === 11) {
      rev = 0;
    }
    if (rev !== parseInt(cpf.charAt(10))) {
      return false;
    }
    return true;
  }
}
