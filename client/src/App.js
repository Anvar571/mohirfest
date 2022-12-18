import {useEffect} from "react"
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
import { useSelector } from "react-redux";
import Alert from "./components/alert/Alert";
import { useDispatch } from "react-redux";
import { refresh_token } from "./redux/actions/authAction";

function App() {
  const { auth } = useSelector(state => state);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(refresh_token())
  },[dispatch])

  return (
    <Router>
      <Alert/>
      <div className="">
        <div className={`row ${auth.token ? "" : 'd-flex justify-content-center align-items-center'} `}>
          {
            auth.token &&
            <div className="col-3">
              <Menu />
            </div>}
          <div className="col-9">
            {auth.token && <Header />}
            <Routes>
              <Route path="/" element={auth.token ? <Home /> : <Login />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/register" element={<Register />} />

              <Route path="/about" element={<AboutPage />} />
              <Route path="/topshiriqlar/" element={<Tasks />} />
              <Route path="/topshiriqlar/:id" element={<Yonalish />} />

              <Route path="/yangiliklar" element={<NewsPage />} />
              <Route path="/maslahatlar" element={<MaslahatlarPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="*" element={<NotFoudPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
