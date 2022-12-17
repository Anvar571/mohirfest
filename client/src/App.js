import Menu from './components/menu/Menu';
import Header from './components/header/Header';
import Home from './components/home/Home';
import './styles/global.css';
import './styles/home.css';

function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col-md-3 px-5 my-4">
          <Menu />
        </div>
        <div className="col-md-9 hero-section px-5">
          <Header />
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
