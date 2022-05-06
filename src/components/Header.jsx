import { init } from 'ityped'
import {useRef, useEffect} from 'react'
import {AiOutlineMenu} from 'react-icons'

function Header() {

    const logoRef = useRef();

    useEffect(()=>{
        init(logoRef.current, {showCursor: false, strings: ['Uroš Krupniković', 'Krupniković Uroš'], loop: false})
    }, []);

    return ( <header>
        <code ref={logoRef}></code>

    </header> );
}

export default Header;