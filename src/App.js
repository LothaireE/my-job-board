import "./App.css";
// import Title from "./components/Titles";
// import Job from "./components/Job";
import Header from "./components/Header"
import Jobs from "./components/Jobs";
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Header Title="The Job Board"/>

      <Jobs/>

      <Footer/>
    </div>
  );
}

export default App;