import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  state = {
    cardName: '',
    description: '',
    image: '',
    atribute1: '0',
    atribute2: '0',
    atribute3: '0',
    rarity: 'normal',
    superTrunfo: false,

  };

  handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    this.setState({
      [name]: (type === 'checkbox' ? checked : value),
    });
  };

  render() {
    const { cardName, description, image, atribute1,
      atribute2, atribute3, rarity, superTrunfo } = this.state;
    return (
      <div>
        <header>

          <h1>Tryunfo</h1>

        </header>

        <main>

          <Form
            cardName={ cardName }
            cardDescription={ description }
            cardImage={ image }
            cardAttr1={ atribute1 }
            cardAttr2={ atribute2 }
            cardAttr3={ atribute3 }
            cardRare={ rarity }
            cardTrunfo={ superTrunfo }
            onInputChange={ this.handleInputChange }
          />
          <Card
            cardName={ cardName }
            cardDescription={ description }
            cardImage={ image }
            cardAttr1={ atribute1 }
            cardAttr2={ atribute2 }
            cardAttr3={ atribute3 }
            cardRare={ rarity }
            cardTrunfo={ superTrunfo }
            onInputChange={ this.handleInputChange }
          />

        </main>

      </div>
    );
  }
}

export default App;
