import './App.css';
import Counter from './Counter';


function App() {
  return (
    <div className="App">
     <Counter title={"Counter 1"} color='green'/>
     <Counter title={"Counter 2"} color='red'/>
     <Counter extra='Yo'/>
    </div>

  );
}

export default App;
