import React, {useContext, useState} from 'react';
import { TextField, Button, Typography } from '@material-ui/core';
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';

function DadosUsuario({ aoEnviar }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [erros, setErros] = useState({ senha: { valido: true, texto: "" } })

  const validacoes = useContext(ValidacoesCadastro)
  function validarCampos(event) {
    const { name, value } = event.target
    const novoEstado = { ...erros }
    novoEstado[name] = validacoes[name](value);
    setErros(novoEstado);
  }

  function possoEnviar() {
    let posso = true;
    for (let campo in erros) {
      if (!erros[campo].valido) {
        posso = false
        return posso
      }
    }
    return posso
  }

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      if (possoEnviar()) {
        aoEnviar({ email, senha });
      }
    }}>
      <TextField
        value={email}
        onChange={(event) => {
          setEmail(event.target.value)
        }}
        variant="outlined"
        margin="normal"
        fullWidth
        id="email"
        name="email"
        label="E-mail"
        type="email"
      // required
      />
      <TextField
        value={senha}
        onChange={(event) => {
          setSenha(event.target.value)
        }}
        variant="outlined"
        margin="normal"
        fullWidth
        onBlur={validarCampos}
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
        id="senha"
        name="senha"
        label="Senha"
        type="password"
      // required
      />
      <Button
        variant="contained"
        margin="normal"
        type="submit"
        color="primary">
        Próximo
      </Button>
    </form>
  )
}

export default DadosUsuario;
