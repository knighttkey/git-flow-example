import React, {
  useCallback,
  useState,
  useEffect,
  Fragment,
  useContext,
} from "react";
import "./MusicFestivalIndex.scss";
import { Provider } from "./components/context";
import Navbar from "./components/Navbar/Navbar";
const MusicFestivalIndex = () => {
  const [pathName, setPathName] = useState("home");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const contextValue = { pathName, setPathName, isDarkMode, setIsDarkMode };
  return (
      <div className={`music_festival_container ${isDarkMode?"music_festival_container_dark":""}`}>
        <Provider value={contextValue}>
          <Fragment>
              <Navbar />
          </Fragment>
        </Provider>
      </div>
  );
};
export default MusicFestivalIndex;
