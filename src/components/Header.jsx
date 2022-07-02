import { init } from "ityped";
import { useState, useRef, useEffect } from "react";
import { SwipeableDrawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArticleIcon from "@mui/icons-material/Article";
import CommentIcon from "@mui/icons-material/Comment";
import PhoneIcon from "@mui/icons-material/Phone";
import { BrowserView } from "react-device-detect";

function Header() {
  const [drawer, setDrawer] = useState(false);
  const logoRef = useRef();

  useEffect(() => {
    init(logoRef.current, {
      showCursor: false,
      strings: ["Uroš Krupniković", "Крупниковић Урош"],
      loop: false,
    });
  }, []);

  return (
    <header>
      <code ref={logoRef}></code>
      <MenuIcon
        onClick={() => {
          setDrawer(true);
        }}
        className="menuIcon"
      ></MenuIcon>
      <SwipeableDrawer
        anchor="right"
        open={drawer}
        onClose={() => {
          setDrawer(false);
        }}
        onOpen={() => {}}
      >
        <div className="drawer">
          <div className="exit">
            <CloseIcon onClick={() => setDrawer(false)} />
          </div>
          <ul>
            <li>
              <a
                onClick={() => {
                  setDrawer(false);
                }}
                href="#"
              >
                <HomeIcon />
                Home{" "}
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  setDrawer(false);
                }}
                href="#who"
              >
                <AccountCircleIcon />
                About{" "}
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  setDrawer(false);
                }}
                href="#projects"
              >
                <ArticleIcon />
                Projects{" "}
              </a>
            </li>
            <BrowserView style={{ width: "100%" }}>
              <li>
                <a
                  onClick={() => {
                    setDrawer(false);
                  }}
                  href="#testimonials"
                >
                  <CommentIcon />
                  Testimonials{" "}
                </a>
              </li>
            </BrowserView>
            <li>
              <a
                onClick={() => {
                  setDrawer(false);
                }}
                href="#contact"
              >
                <PhoneIcon />
                Contact{" "}
              </a>
            </li>
          </ul>
        </div>
      </SwipeableDrawer>
    </header>
  );
}

export default Header;
