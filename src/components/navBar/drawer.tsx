import React, { useEffect } from "react";
import CloseIcon from "@material-ui/icons/Close";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import TurnedInNotIcon from "@material-ui/icons/TurnedInNot";
import useWindowSize from "../../hooks/useWindowSize";
import "./index.scss";

interface TDrawerListProps {
  close: () => void;
  open: () => void;
  isOpen: boolean;
}

const navList: Array<string> = [
  "LIGHTING EXPLORER",
  "OFFICE",
  "HOTEL",
  "HOME",
  "ALL PRODUCTS",
  "PENDANT LIGHT",
  "CHANDELIER",
  "SWITCHES & SOCKETS",
  "CEILING LAMP",
  "WALL LAMP",
];

const DrawerList = ({isOpen, open, close}: TDrawerListProps) => {
  const [width] = useWindowSize();

  useEffect(() => {
    if (width > 900) {
      close();
    }
  }, [width, close]);

  return (
    <div className="drawer">
      <SwipeableDrawer
        anchor="left"
        open={isOpen}
        onClose={close}
        onOpen={open}
        className="close-drawer"
      >
        <div className="drawer-list">
          <div className="header">
            <div className="title">
              <h5>Lists</h5>
              <div>
                <CloseIcon onClick={close} className="cancel" />
              </div>
            </div>
            <hr className="rule" />
          </div>

          <ul className="profile">
            <li>
              <PersonOutlineIcon className="icon" />
              <p>MY ACCOUNT</p>
            </li>
            <li>
              <TurnedInNotIcon className="icon" />
              <p>LIST</p>
            </li>
          </ul>

          <ul className="nav-list container">
            {navList.map((list, i) => (
              <li key={i}>{list}</li>
            ))}
          </ul>
        </div>
      </SwipeableDrawer>
    </div>
  );
};

export default DrawerList;
