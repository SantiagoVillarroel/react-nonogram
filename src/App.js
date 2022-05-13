import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Grid from './Components/Grid';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="container">
        <Grid/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
