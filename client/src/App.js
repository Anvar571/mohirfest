import Header from './components/header/Header';
import Home from './components/home/Home';

function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col-md-3">
          <h2>Menyular</h2>
        </div>
        <div className="col-md-9">
          <Header />
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
