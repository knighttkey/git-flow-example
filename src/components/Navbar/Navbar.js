import React, {
  useCallback,
  useState,
  useEffect,
  Fragment,
  useContext,
} from "react";
import "./Navbar.scss";
import context, { Provider } from "./../context";

const Navbar = () => {
  const [userPanelShow, setUserPanelShow] = useState(false);
  const contextValue = useContext(context);
  const { pathName, setPathName, isDarkMode, setIsDarkMode } = contextValue;
  console.log("pathName", pathName);
  const handleCloseUserPanel = (e) => {
    setUserPanelShow(false);
    e.stopPropagation();
  };
  return (
    <Provider value={contextValue}>
      <div className={`navbar_container`}>
        <div
          className={`navbar_inner ${isDarkMode ? "navbar_inner_dark" : ""}`}
        >
          <div className="main_logo_area">
          </div>
          <div
            className={`menu_item_area ${isDarkMode ? "menu_item_dark" : ""}`}
          >
          </div>
          <div className="func_area">
            <div
              className="switch_toggle"
              onClick={() => setIsDarkMode(!isDarkMode)}
            >
              <div
                className={`switch_toggle_inner ${
                  isDarkMode ? "switch_toggle_inner_dark" : ""
                }`}
              >
                <div
                  className={`round ${isDarkMode ? "round_dark" : ""}`}
                ></div>
              </div>
            </div>
            <div
              className={`icon icon_cart ${isDarkMode ? "icon_cart_dark" : ""}`}
            ></div>
            <div
              className={`icon icon_user ${isDarkMode ? "icon_user_dark" : ""}`}
              id="iconUser"
              onClick={() => setUserPanelShow(true)}
            >

            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
};
export default Navbar;
