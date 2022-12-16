import Menu from './components/menu/Menu';
import Header from './components/header/Header';
import Home from './components/home/Home';

function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col-md-3">
          <Menu />
        </div>
        <div className="col-md-6">
          <Header />
          <Home />
        </div>
        <div className="col-md-3">
          Right Section
        </div>
      </div>
    </div>
  );
}

export default App;
