import img from "../img/fishing.svg";

function Who() {
  return (
    <div id="who">
      <div className="separator">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="line"></div>
      </div>
      <div className="content">
        <div className="text">
          <h1>Who I am</h1>
          <p className="description">My name's Uroš. I'm a web developer and enthusiast based in Čačak, Serbia.</p>
          <p className="description">During the day I study chinese linguistics at the Faculty of Philology Belgrade and in the evening I work as a lead developer at a local agency. I spend my free time traveling and engaging in sport activities. I also pick my projects to always be in an interest of the society as a whole.</p>
        </div>
        <div className="img">
          <img src={img} alt="illustration of a man fishing"></img>
        </div>
      </div>
    </div>
  );
}

export default Who;
