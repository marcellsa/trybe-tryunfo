import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <main>
        <h2>Adicionar nova carta</h2>

        <form>
          <label htmlFor="name-input">
            Nome
            <input type="text" data-testid="name-input" name="cardName" />
          </label>

          <label htmlFor="description-input">
            Descrição
            <textarea
              name="description"
              cols="30"
              rows="10"
              data-testid="description-input"
            />
          </label>

          <label htmlFor="attr1-input">
            Atributo 1
            <input
              type="number"
              data-testid="attr1-input"
              name="atribute1"
              min="0"
              max="90"
            />
          </label>

          <label htmlFor="attr2-input">
            Atributo 2
            <input
              type="number"
              data-testid="attr2-input"
              name="atribute2"
              min="0"
              max="90"
            />
          </label>

          <label htmlFor="attr3-input">
            Atributo 3
            <input
              type="number"
              data-testid="attr3-input"
              name="atribute3"
              min="0"
              max="90"
            />
          </label>

          <label htmlFor="image-input">
            Imagem
            <input type="text" data-testid="image-input" name="image" />
          </label>

          <label htmlFor="rare-input">
            Raridade
            <select name="rarity" data-testid="rare-input">
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito raro</option>
            </select>
          </label>

          <label htmlFor="trunfo-input">
            Super Trunfo
            <input type="checkbox" data-testid="trunfo-input" name="superTrunfo" />
          </label>

          <button data-testid="save-button" type="button">
            Salvar
          </button>
        </form>
      </main>
    );
  }
}

export default Form;
