import React from 'react';
import { TextField, Button } from '@material-ui/core';

function DadosUsuario() {
  return (
    <form>
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