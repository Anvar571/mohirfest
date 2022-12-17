import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Login from "./pages/login";
import Register from "./pages/register";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Menu from "./components/menu/Menu";
import AboutPage from "./components/about/AboutPage";
import Tasks from "./components/topshiriq/Tasks";
import NewsPage from "./components/news/NewsPage";
import MaslahatlarPage from "./components/maslahatlar/MaslahatlarPage";
import ProfilePage from "./components/profile/ProfilePage";

function App() {
  const token = localStorage.getItem("token")
  return (
    <Router>
      <div className="">
        <div className="row">
          <div className="col-3">
            {token && <Menu />}
          </div>
          <div className="col-9">
            {token && <Header />}
            <Routes>
              <Route path="/" element={token ?<Home /> : <Register/>} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/topshiriqlar" element={<Tasks/>}/>
              <Route path="/yangiliklar" element={<NewsPage/>}/>
              <Route path="/maslahatlar" element={<MaslahatlarPage/>}/>
              <Route path="/profile" element={<ProfilePage/>}/>
              <Route exact path="/register" element={<Register />} />
              <Route exact path="/login" element={<Login />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
