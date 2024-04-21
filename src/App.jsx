import React from 'react';
import MyComponent from './components/MyComponent';
import StyledComponent from './components/StyledComponent';
import Campanha from './components/Campanha';
import FormularioDeContato from './components/FormularioDeContato';


/*
function App() {
  return (
    <div className="App">
      <MyComponent />
    </div>
  );
}
*/

/*
function App() {
  return (
    <div className="App">
      <StyledComponent />
    </div>
  );
}
*/

/*
function App() {
  return (
    <div className="App">
      <Campanha mes="Setembro" />
      <Campanha mes="Outubro" />
      <Campanha mes="Novembro" />
    </div>
  );
}
*/

function App() {
  return (
    <div className="App">
      <h1>Formulário de Contato</h1>
      <FormularioDeContato />
    </div>
  );
}

export default App;