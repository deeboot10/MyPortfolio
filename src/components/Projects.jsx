import img1 from '../img/kraljica.svg'
import img2 from '../img/goldie.svg'
import img3 from '../img/appa.svg'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

function Projects() {
    return ( <div id="projects">
        <h1>Projects</h1>
        <div className="container">
            <div className="item">
                <div className="side">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, perspiciatis laudantium odit esse totam nisi cupiditate deserunt vitae nostrum laborum sit quas blanditiis numquam officiis quis. Rerum atque eveniet officia!</div>
                <h4>Coffee Web Shop - Kraljica Kafa</h4>
                <img src={img1} alt="coffee illustration" />
                <a className='play' href='https://kraljicakafa.com/' target='_blank'>
                    <PlayCircleIcon></PlayCircleIcon>
                </a>
            </div>
            <div className="item">
                <div className="side">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, perspiciatis laudantium odit esse totam nisi cupiditate deserunt vitae nostrum laborum sit quas blanditiis numquam officiis quis. Rerum atque eveniet officia!</div>
                <h4>Nft Landing Page - Goldie</h4>
                <img src={img2} alt="nft illustration" />
                <a className='play' href='https://goldie-330e9.web.app/' target='_blank'>
                    <PlayCircleIcon></PlayCircleIcon>
                </a>
            </div>
            <div className="item">
                <div className="side">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, perspiciatis laudantium odit esse totam nisi cupiditate deserunt vitae nostrum laborum sit quas blanditiis numquam officiis quis. Rerum atque eveniet officia!</div>
                <h4>Crypto Currency Landing Page - Appa Inu</h4>
                <img src={img3} alt="crypto currency illustration" />
                <a className='play' href='https://appainu.org/' target='_blank'>
                    <PlayCircleIcon></PlayCircleIcon>
                </a>
            </div>
        </div>
    </div> );
}

export default Projects;