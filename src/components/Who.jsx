import img from '../img/fishing.svg'

function Who() {
    return ( <div id="who">
        <div className="separator">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="line"></div>
        </div>
        <div className="content">
            <div className="text">
                <h1>Who I am</h1>
                <p className="description">My name's Jane. I'm a web designer and developer based in Southampton, UK.</p>
                <p className="description">During the day I work as a lead developer at a local agency and in the evening I work on freelance projects and utilize the time to built my own products. I spent my leisure hours writing articles and poetry. Right now I'm also trying a hand at machine learning and AI. I love to learn and explore new arenas.</p>
            </div>
            <div className="img">
                <img src={img} alt='illustration of a man fishing'></img>
            </div>
        </div>
    </div> );
}

export default Who;