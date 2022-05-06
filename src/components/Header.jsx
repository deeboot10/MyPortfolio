import { init } from 'ityped'
import {useState, useRef, useEffect} from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import { SwipeableDrawer } from '@mui/material';

function Header() {

    const [drawer, setDrawer] = useState(false);
    const logoRef = useRef();

    useEffect(()=>{
        init(logoRef.current, {showCursor: false, strings: ['Uroš Krupniković', 'Крупниковић Урош'], loop: false})
    }, []);

    return ( <header>
        <code ref={logoRef}></code>
        <AiOutlineMenu onClick={()=>{setDrawer(true)}} className='manuIcon'></AiOutlineMenu>
        <SwipeableDrawer anchor='right' open={drawer} onClose={()=>{setDrawer(false)}}>
            hello
        </SwipeableDrawer>
    </header> );
}

export default Header;