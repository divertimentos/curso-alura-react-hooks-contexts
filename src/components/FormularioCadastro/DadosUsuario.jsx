import React, { useState } from 'react';
import { TextField, Button, Typography } from '@material-ui/core';

function DadosUsuario({ aoEnviar }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      aoEnviar({ email, senha });
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
        id="senha"
        label="Senha"
        type="password"
      // required
      />
      <Button
        variant="contained"
        margin="normal"
        type="submit"
        color="primary">
        Cadastrar
      </Button>
    </form>
  )
}

export default DadosUsuario;