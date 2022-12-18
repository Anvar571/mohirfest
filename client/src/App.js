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
import NotFoudPage from "./pages/notFoundPage";
import Yonalish from "./components/topshiriq/Yo'nalishlar/Yonalishlar";


function App() {
  const token = localStorage.getItem("refresh")
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
              <Route path="/" element={token ? <Home /> : <Register/>} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/register" element={<Register />} />

              <Route path="/about" element={<AboutPage />} />
              <Route path="/topshiriqlar/" element={<Tasks/>}/>
                <Route path="/topshiriqlar/:id" element={<Yonalish/>}/>

              <Route path="/yangiliklar" element={<NewsPage/>}/>
              <Route path="/maslahatlar" element={<MaslahatlarPage/>}/>
              <Route path="/profile" element={<ProfilePage/>}/>
              <Route path="*" element={<NotFoudPage/>}/>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
