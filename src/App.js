import "./App.css";
import Title from "./components/Titles";
import Job from "./components/Job";


function App() {
  return (
    <div className="App">
      <div className="Header">

        <Title headerTitle= "The Job Board" />
        
      </div>
      <div className="Jobs">
         <Job title= "Full Time Sales Associate - Sydney Boutique" contractType="CDI" country="Australie" city="Sidney" />
         
      </div>
    </div>
  );
}

export default App;