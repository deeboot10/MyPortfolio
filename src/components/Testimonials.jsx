import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { useState, useEffect } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { tns } from "../../node_modules/tiny-slider/src/tiny-slider"

const reviews = [{name: 'Milica Dabović', text: 'Making my portfolio with this helped me get my role as \'Dr. Drake Ramoray\' in \'Days Of Our Lives\'. You guys are the best !', role: 'Ex Basketball Player'}, {name: 'Milica Dabović', text: 'Making my portfolio with this helped me get my role as \'Dr. Drake Ramoray\' in \'Days Of Our Lives\'. You guys are the best !', role: 'Ex Basketball Player'}, {name: 'Milica Dabović', text: 'Making my portfolio with this helped me get my role as \'Dr. Drake Ramoray\' in \'Days Of Our Lives\'. You guys are the best !', role: 'Ex Basketball Player'}, {name: 'Milica Dabović', text: 'Making my portfolio with this helped me get my role as \'Dr. Drake Ramoray\' in \'Days Of Our Lives\'. You guys are the best !', role: 'Ex Basketball Player'}];


function Testimonials() {

    const [slider, setSlider] = useState(null);
    const [active, setActive] = useState(0);

    useEffect(()=> {
        const slider = tns({
            container: '.my-slider',
            items: 1,
            slideBy: 'page',
            "center": true,
            speed: 700,
            autoplay: false,
            controls: false,
            nav: false
        });
        setSlider(slider)
    }, []);


    const handleClickLeft = ()=> {
        if(active > 0){
            slider.goTo(active - 1);
            setActive(state => state - 1)
        } else{
            slider.goTo(reviews.length-1)
            setActive(reviews.length - 1)
        }
    }
    const handleClickRight = ()=> {
        if(active < reviews.length - 1){
            slider.goTo(active + 1);
            setActive(state => state + 1)
        }else{
            slider.goTo(0);
            setActive(0)
        }
    }


    const reviewsDom = []
    reviews.forEach((rev, i) => {
        reviewsDom.push(<div className='item-container' key={i}>
            <div className='item'>
                <AccountCircleIcon className='avatar'></AccountCircleIcon>
                <p className="text">{rev.text}</p>
                <p className='name'>{rev.name}</p>
                <p className="role">{rev.role}</p>
            </div>
        </div>)
    });


    return ( <div id="testimonials">
        <h1>Testimonials</h1>
        <div className="quote">
            <FormatQuoteIcon></FormatQuoteIcon>
        </div>
        <div className="sliderCont">
            <ArrowCircleLeftIcon onClick={handleClickLeft} className='arrowIcon'/>
            <div className="my-slider">
                {reviewsDom}
            </div>
            <ArrowCircleRightIcon onClick={handleClickRight} className='arrowIcon'/>
        </div>
    </div> );
}

export default Testimonials;