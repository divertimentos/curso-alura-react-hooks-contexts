import React from 'react';

import { TextField, Button } from '@material-ui/core';

function DadosEntrega() {
  return (
    <form>
      <TextField
        id="cep"
        label="CEP"
        type="number"
        variant="outlined"
        margin="normal"
      />

      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        id="endereco"
        label="Endereço"
        type="text"
      />

      <TextField
        variant="outlined"
        margin="normal"
        id="numero"
        label="Número"
        type="number"
      />

      <TextField
        variant="outlined"
        margin="normal"
        id="estado"
        label="Estado"
        type="text"
      />

      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        id="cidade"
        label="Cidade"
        type="text"
      />

      <Button type="submit" variant="contained" color="primary" fullWidth>
        Finalizar Cadastro
      </Button>
    </form>
  )
}

export default DadosEntrega;