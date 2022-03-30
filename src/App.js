import logo from './logo.svg';
import './App.css';
import CardGroupe from './component/CardGroupe/CardGroupe';

function App() {
  return (
    <div className="App">
      <div>
        <button type="button" className="btn btn-primary">Primary</button>
        <button type="button" className="btn btn-secondary">Secondary</button>
        <button type="button" className="btn btn-success">Success</button>
        <button type="button" className="btn btn-danger">Danger</button>
        <button type="button" className="btn btn-warning">Warning</button>
        <button type="button" className="btn btn-info">Info</button>
        <button type="button" className="btn btn-light">Light</button>
        <button type="button" className="btn btn-dark">Dark</button>
        <button type="button" className="btn btn-link">Link</button>
      </div>
      <CardGroupe></CardGroupe>
    </div>
  );
}

export default App;
