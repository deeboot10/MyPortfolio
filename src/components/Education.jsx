import SchoolIcon from '@mui/icons-material/School';
import img from '../img/school.svg'

function Education() {
    return ( <div className="education">
        <div className="text">
            <h1>Education</h1>
            <div className="container">
                <div className="item">
                    <div className="icon"><SchoolIcon/></div>
                    <div className="item-text">
                        <p className="labelTop">2009-2014</p>
                        <p className="name">OŠ Filip Filipović, Čačak, Serbia</p>
                        <p className='labelBottom'>Primary School</p>
                    </div>
                </div>
                <div className="item">
                    <div className="icon"><SchoolIcon/></div>
                    <div className="item-text">
                        <p className="labelTop">2009-2014</p>
                        <p className="name">OŠ Filip Filipović, Čačak, Serbia</p>
                        <p className='labelBottom'>Primary School</p>
                    </div>
                </div>
                <div className="item">
                    <div className="icon"><SchoolIcon/></div>
                    <div className="item-text">
                        <p className="labelTop">2009-2014</p>
                        <p className="name">OŠ Filip Filipović, Čačak, Serbia</p>
                        <p className='labelBottom'>Primary School</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="img">
            <img src={img} alt='school illustration'></img>
        </div>
    </div> );
}

export default Education;