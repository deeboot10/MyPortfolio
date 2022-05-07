import img from '../img/job.svg'
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';

function Experience() {
    return ( <div className="experience">
        <div className="img">
            <img src={img} alt="programming illustration" />
        </div>
        <div className="text">
            <h1>Experience</h1>
            <div className="container">
                <div className="item">
                    <div className="icon"><WorkOutlineIcon/></div>
                    <div className="item-text">
                        <p className="labelTop">2014-2022</p>
                        <p className="name">Quantox Tech Co</p>
                        <p className='labelBottom'>Front-End Web Developer</p>
                    </div>
                </div>
                <div className="item">
                    <div className="icon"><WorkOutlineIcon/></div>
                    <div className="item-text">
                        <p className="labelTop">2014-2022</p>
                        <p className="name">Quantox Tech Co</p>
                        <p className='labelBottom'>Front-End Web Developer</p>
                    </div>
                </div>
                <div className="item">
                    <div className="icon"><WorkOutlineIcon/></div>
                    <div className="item-text">
                        <p className="labelTop">2014-2022</p>
                        <p className="name">Quantox Tech Co</p>
                        <p className='labelBottom'>Front-End Web Developer</p>
                    </div>
                </div>
            </div>
        </div>
    </div> );
}

export default Experience;