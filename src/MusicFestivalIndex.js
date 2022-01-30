import React, {
  useCallback,
  useState,
  useEffect,
  Fragment,
  useContext,
} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./MusicFestivalIndex.scss";
import { Provider } from "./components/context";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import TicketOrder from "./components/TicketOrder/TicketOrder";
import Shop from "./components/Shop/Shop";
import LineUp from "./components/LineUp/LineUp";
import Map from "./components/Map/Map";
import User from "./components/User/User";
const MusicFestivalIndex = () => {
  const [pathName, setPathName] = useState("home");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const contextValue = { pathName, setPathName, isDarkMode, setIsDarkMode };
  return (
    <Router>
      <div className={`music_festival_container ${isDarkMode?"music_festival_container_dark":""}`}>
        <Provider value={contextValue}>
          <Fragment>
              <Navbar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/lineUp" element={<LineUp />} />
              <Route exact path="/ticketOrder" element={<TicketOrder />} />
              <Route exact path="/map" element={<Map />} />
              <Route exact path="/shop" element={<Shop />} />
              <Route exact path="/user" element={<User />} />
            </Routes>
          </Fragment>
        </Provider>
      </div>
    </Router>
  );
};
export default MusicFestivalIndex;
