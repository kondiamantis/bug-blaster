import './App.css';
import './styles.css';
import TicketForm from './components/TicketForm';
import { useReducer } from 'react';
import ticketReducer from './reducers/ticketReducer';

function App() {

  const initialState = {tickets: []};

  const [state, dispatch] = useReducer(ticketReducer, initialState);

  return (
    <div className="App">
      <div className="container">
        <h1>Bug blaster</h1>
        <TicketForm dispatch={dispatch} />
      </div>
    </div>
  );
}

export default App;
