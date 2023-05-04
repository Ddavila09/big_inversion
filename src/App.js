
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <h1>Person Cards</h1>
      <br></br>



      <PersonCard personName={"Doe, Jane"} age={45} hairColor={"black"}/>
      <PersonCard personName={"Smith, Name"} age={88} hairColor={"black"}/>
      <PersonCard personName={"Fillmore, Millard"} age={50} hairColor={"brown"}/>
      <PersonCard personName={"Smith, maria"} age={62} hairColor={"brown"}/>
    </div>
  );
}

export default App;
