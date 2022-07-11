import img from "../img/job.svg";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import { BrowserView } from "react-device-detect";

function Experience() {
  return (
    <div className="experience">
      <BrowserView>
        <div className="img">
          <img src={img} alt="programming illustration" />
        </div>
      </BrowserView>
      <div className="text">
        <h1>Experience</h1>
        <div className="container">
          <div className="item">
            <div className="icon">
              <WorkOutlineIcon />
            </div>
            <div className="item-text">
              <p className="labelTop">2019</p>
              <p className="name">Quantox Tech Co</p>
              <p className="labelBottom">Front-End Web Developer</p>
            </div>
          </div>
          <div className="item">
            <div className="icon">
              <WorkOutlineIcon />
            </div>
            <div className="item-text">
              <p className="labelTop">2020-2021</p>
              <p className="name">Freelance work</p>
              <p className="labelBottom">Front-End Web Developer</p>
            </div>
          </div>
          <div className="item">
            <div className="icon">
              <WorkOutlineIcon />
            </div>
            <div className="item-text">
              <p className="labelTop">2022-PRESENT</p>
              <p className="name">Alpa Digital Co</p>
              <p className="labelBottom">Front-End Web Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
