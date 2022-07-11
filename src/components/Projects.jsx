import img1 from "../img/kraljica.svg";
import img2 from "../img/goldie.svg";
import img3 from "../img/appa.svg";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

function Projects() {
  return (
    <div id="projects">
      <h1>Projects</h1>
      <div className="container">
        <div className="item">
          <div className="side">Modern Web Shop used by coffee producing company. Every order is recorded in firebase firestore database and can be accessed through admin panel. Users can login to shorten the time of next order by letting the site remember their order informations.</div>
          <h4>Coffee Web Shop - Kraljica Kafa</h4>
          <img src={img1} alt="coffee illustration" />
          <a className="play" href="https://kraljicakafa.com/" target="_blank">
            <PlayCircleIcon></PlayCircleIcon>
          </a>
        </div>
        <div className="item">
          <div className="side">Landing page for a fresh new nft collection. Mostly inspired by child motives and spiced up with some smooth transitions.</div>
          <h4>Nft Landing Page - Goldie</h4>
          <img src={img2} alt="nft illustration" />
          <a className="play" href="https://www.goldienft.io/" target="_blank">
            <PlayCircleIcon></PlayCircleIcon>
          </a>
        </div>
        <div className="item">
          <div className="side">Crypto Currency landing page. Clean and simple. Effectively giving off right message to users.</div>
          <h4>Crypto Currency Landing Page - Appa Inu</h4>
          <img src={img3} alt="crypto currency illustration" />
          <a className="play" href="https://appainu.org/" target="_blank">
            <PlayCircleIcon></PlayCircleIcon>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
