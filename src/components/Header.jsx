import { init } from 'ityped'
import {useState, useRef, useEffect} from 'react'
import { SwipeableDrawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArticleIcon from '@mui/icons-material/Article';
import CommentIcon from '@mui/icons-material/Comment';
import PhoneIcon from '@mui/icons-material/Phone';

function Header() {

    const [drawer, setDrawer] = useState(false);
    const logoRef = useRef();

    useEffect(()=>{
        init(logoRef.current, {showCursor: false, strings: ['Uroš Krupniković', 'Крупниковић Урош'], loop: false})
    }, []);

    return ( <header>
        <code ref={logoRef}></code>
        <MenuIcon onClick={()=>{setDrawer(true)}} className='manuIcon'></MenuIcon>
        <SwipeableDrawer anchor='right' open={drawer} onClose={()=>{setDrawer(false)}}>
            <div className="exit"><CloseIcon /></div>
            <ul>
                <li><a href="#">Home <HomeIcon/></a></li>
                <li><a href="#who">About <AccountCircleIcon/></a></li>
                <li><a href="#projects">Projects <ArticleIcon/></a></li>
                <li><a href="#testimonials">Testimonials <CommentIcon/></a></li>
                <li><a href="#contact">Contact <PhoneIcon/></a></li>
            </ul>
        </SwipeableDrawer>
    </header> );
}

export default Header;