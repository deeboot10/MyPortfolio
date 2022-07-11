import profileImg from "../img/profilepic.png";
import Social from "../components/Social";
import { BrowserView, MobileView } from "react-device-detect";
import cv from "../files/CV.pdf";
function Hero() {
  return (
    <div className="hero">
      <div className="left">
        <BrowserView>
          <img src={profileImg} alt="My Profile Image" />
        </BrowserView>
        <MobileView>
          <div className="img-container">
            <img src={profileImg} alt="My Profile Image" />
          </div>
        </MobileView>
        <BrowserView style={{ alignSelf: "flex-end" }}>
          <Social></Social>
        </BrowserView>
      </div>
      <div className="right">
        <p className="topLabel">Web Developer</p>
        <h1>Krupniković Uroš</h1>
        <p className="description">Creating smooth, futuristic UIs to bring only the right informations to users. Using modern technologies in order to make websites approachable and easy to use.</p>
        <div className="buttons">
          <a href={cv} download={cv} target="_blank">
            <button className="btn-out">Download CV</button>
          </a>
          <BrowserView>
            <a href="#contact">
              <button className="btn-in">Contact</button>
            </a>
          </BrowserView>
        </div>
      </div>
    </div>
  );
}

export default Hero;
