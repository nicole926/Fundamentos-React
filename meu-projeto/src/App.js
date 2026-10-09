import './App.css';
import HelloWord from './components/helloWord';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';

function App() {
  return (
    <div className="App">
      <Frase />
      <HelloWord />
      <SayMyName name="Júlia" />
      <Pessoa nome="Júlia" idade="20" profissao="Estudante" />
    </div>
  );
}

export default App;
