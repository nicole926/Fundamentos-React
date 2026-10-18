import './App.css';
import HelloWord from './components/helloWord';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Lista from './components/List';
import Tecnologias from './components/Tecnologias';

function App() {
  return (
    <div className="App">
      <HelloWord />
      <SayMyName name="Júlia" />
      <Pessoa nome="Júlia" idade="20" profissao="Estudante" foto="https://example.com/foto.jpg" />
      <Lista />
      <Tecnologias />
    </div>
  );
}

export default App;
