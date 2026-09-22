import './App.css';
import HelloWord from './components/helloWord';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {
  return (
    <div className="App">
      <HelloWord />
      <SayMyName name="Júlia" />
      <Pessoa nome="Júlia" idade="20" profissao="Estudante" />
    </div>
  );
}

export default App;
