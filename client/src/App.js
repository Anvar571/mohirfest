import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";

function App() {
  const token = localStorage.getItem("firstToken")
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={token ? <Home/> : <Login/>}/>
          <Route exact path="/register" element={<Register/>}/>
        </Routes>
    </div>
    </Router>
  );
}

export default App;
