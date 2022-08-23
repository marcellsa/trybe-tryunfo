import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  render() {
    return (
      <div>
        <header>

          <h1>Tryunfo</h1>

        </header>

        <main>

          <Form />
          <Card />

        </main>

      </div>
    );
  }
}

export default App;
