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

  };

  // validateButton = () => {
  //   console.log('funcionando');
  // };

  handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    this.setState({
      [name]: (type === 'checkbox' ? checked : value),
    }, () => {
      const { cardName, cardDescription, cardImage, cardAttr1,
        cardAttr2, cardAttr3, cardRare } = this.state;

      const condition1 = cardName && cardDescription && cardImage && cardRare;

      const sum = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
      const totalMax = 210;
      const condition2 = sum <= totalMax;

      const minAtributeValue = 0;
      const maxAtributeValue = 90;
      const condition3 = (
        Number(cardAttr1) >= minAtributeValue && Number(cardAttr1) <= maxAtributeValue
        && Number(cardAttr2) >= minAtributeValue && Number(cardAttr2) <= maxAtributeValue
        && Number(cardAttr3) >= minAtributeValue && Number(cardAttr3) <= maxAtributeValue
      );

      if (condition1 && condition2 && condition3) {
        this.setState({
          isSaveButtonDisabled: false,
        });
      } else {
        this.setState({
          isSaveButtonDisabled: true,
        });
      }
    });
  };

  render() {
    const { cardName, cardDescription, cardImage, cardAttr1,
      cardAttr2, cardAttr3, cardRare, cardTrunfo, isSaveButtonDisabled } = this.state;
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

        </main>

      </div>
    );
  }
}

export default App;
