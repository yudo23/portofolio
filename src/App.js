import './App.css';

import {
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";

import HomeScreen from "./screens/home/HomeScreen";
import AboutScreen from "./screens/about/AboutScreen";
import PortofolioScreen from "./screens/portofolio/PortofolioScreen";
import ContactScreen from "./screens/contact/ContactScreen";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={<HomeScreen/>}
          />
          <Route
            exact
            path="/about"
            element={<AboutScreen/>}
          />
          <Route
            exact
            path="/contact"
            element={<ContactScreen/>}
          />
          <Route
            exact
            path="/portofolio"
            element={<PortofolioScreen/>}
          />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
