import React from 'react';
import { TextField, Button, Typography } from '@material-ui/core';

function DadosUsuario({aoEnviar}) {
  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      aoEnviar();
    }}>
      <Typography variant="subtitle2" align="center">Tela 1/3: Dados do Usuário</Typography>
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        id="email"
        label="E-mail"
        type="email" />
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        id="senha"
        label="Senha"
        type="password" />
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