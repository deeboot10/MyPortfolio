import profileImg from '../img/profilepic.png'

function Hero() {
    return ( <div className="hero">
        <div className="left">
            <img src={profileImg} alt="My Profile Image" />
        </div>
        <div className="right">
            <p className='topLabel'>Web Developer</p>
            <h1>Krupniković Uroš</h1>
            <p className='description'>There wasn't a bird in the sky, but that was not what caught her attention. It was the clouds. The deep green that isn't the color of clouds, but came with these. She knew what was coming and she hoped she was prepared.</p>
            <div className="buttons">
                <button className='btn-out'>Download CV</button>
                <button className='btn-in'>Contact</button>
            </div>
        </div>
    </div> );
}

export default Hero;