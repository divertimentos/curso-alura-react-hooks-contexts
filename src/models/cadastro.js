function validarCPF(cpf) {
  if (cpf.length !== 3) {
    return { valido: false, texto: "CPF deve ter exatamente 3 digitos." }
  } else {
    return { valido: true, texto: "" }
  }
}

function validarSenha(senha) {
  if (senha.length < 4 || senha.length > 72) {
    return { valido: false, texto: "Senha deve ter entre 4 e 72 dígitos." }
  } else {
    return { valido: true, texto: "" }
  }
}

export {validarCPF, validarSenha}