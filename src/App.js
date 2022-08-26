import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    isSaveButtonDisabled: true,
    cardsList: [],
    hasTrunfo: false,
    previewOn: false,

  };

  validateInputs = (nameInput, descriptionInput, imageInput, rareInput) => (
    nameInput && descriptionInput && imageInput && rareInput
  );

  validateSumValuesAtributes = (atribute1, atribute2, atribute3) => {
    const totalMax = 210;
    const sum = Number(atribute1) + Number(atribute2) + Number(atribute3);
    return (sum <= totalMax);
  };

  validateMinMaxValueAtribute = (atribute1, atribute2, atribute3) => {
    const minAtributeValue = 0;
    const maxAtributeValue = 90;
    const validation = (
      Number(atribute1) >= minAtributeValue && Number(atribute1) <= maxAtributeValue
      && Number(atribute2) >= minAtributeValue && Number(atribute2) <= maxAtributeValue
      && Number(atribute3) >= minAtributeValue && Number(atribute3) <= maxAtributeValue
    );
    return validation;
  };

  validateSalveButton = () => {
    const { cardName, cardDescription, cardImage, cardAttr1,
      cardAttr2, cardAttr3, cardRare } = this.state;

    const validationOne = this.validateInputs(
      cardName,
      cardDescription,
      cardImage,
      cardRare,
    );

    const validatioTwo = this.validateSumValuesAtributes(
      cardAttr1,
      cardAttr2,
      cardAttr3,
    );

    const validationThree = (
      this.validateMinMaxValueAtribute(
        cardAttr1,
        cardAttr2,
        cardAttr3,
      )
    );

    if (validationOne && validatioTwo && validationThree) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  };

  handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    this.setState({
      [name]: (type === 'checkbox' ? checked : value),
    }, () => this.validateSalveButton());
  };

  handleSaveButton = (event) => {
    event.preventDefault();
    const { cardName, cardDescription, cardImage, cardAttr1,
      cardAttr2, cardAttr3, cardRare, cardTrunfo } = this.state;
    if (cardTrunfo) {
      this.setState((previousState) => ({ cardName: '',
        cardDescription: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        cardImage: '',
        cardRare: 'normal',
        cardTrunfo: false,
        isSaveButtonDisabled: true,
        cardsList: [...previousState.cardsList, {
          cardName,
          cardDescription,
          cardImage,
          cardAttr1,
          cardAttr2,
          cardAttr3,
          cardRare,
          cardTrunfo,
        }],
        hasTrunfo: true,
        previewOn: true,
      }));
    } else {
      this.setState((previousState) => ({ cardName: '',
        cardDescription: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        cardImage: '',
        cardRare: 'normal',
        cardTrunfo: false,
        isSaveButtonDisabled: true,
        cardsList: [...previousState.cardsList, {
          cardName,
          cardDescription,
          cardImage,
          cardAttr1,
          cardAttr2,
          cardAttr3,
          cardRare,
          cardTrunfo,
        }],
        hasTrunfo: false,
        previewOn: true,
      }));
    }
  };

  handleDeleteButton = (objCard) => {
    const { cardsList } = this.state;
    const filtered = cardsList.filter((card) => card.cardName !== objCard.cardName);
    if (objCard.cardTrunfo) {
      this.setState({
        cardsList: filtered,
        cardTrunfo: false,
        hasTrunfo: false,
      });
    } else {
      this.setState({
        cardsList: filtered,
      });
    }
  };

  render() {
    const { cardName, cardDescription, cardImage, cardAttr1,
      cardAttr2, cardAttr3, cardRare, cardTrunfo,
      isSaveButtonDisabled, hasTrunfo, cardsList, previewOn } = this.state;
    return (
      <div>
        <header>

          <h1>Tryunfo</h1>

        </header>

        <main>

          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardImage={ cardImage }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            onInputChange={ this.handleChange }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onSaveButtonClick={ this.handleSaveButton }
            hasTrunfo={ hasTrunfo }
          />
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardImage={ cardImage }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            onInputChange={ this.handleChange }
          />

          {
            previewOn === true && cardsList.map((card) => (
              <div key={ card.name }>
                <Card
                  cardName={ card.cardName }
                  cardDescription={ card.cardDescription }
                  cardImage={ card.cardImage }
                  cardAttr1={ card.cardAttr1 }
                  cardAttr2={ card.cardAttr2 }
                  cardAttr3={ card.cardAttr3 }
                  cardRare={ card.cardRare }
                  cardTrunfo={ card.cardTrunfo }
                />

                <button
                  data-testid="delete-button"
                  type="button"
                  onClick={ () => this.handleDeleteButton(card) }
                >
                  Excluir

                </button>

              </div>))
          }

        </main>

      </div>
    );
  }
}

export default App;
