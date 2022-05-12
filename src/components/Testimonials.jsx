import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { useEffect, useRef, useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const reviews = [{name: 'Milica Dabović', text: 'Making my portfolio with this helped me get my role as \'Dr. Drake Ramoray\' in \'Days Of Our Lives\'. You guys are the best !', role: 'Ex Basketball Player'}, {name: 'Milica Dabović', text: 'Making my portfolio with this helped me get my role as \'Dr. Drake Ramoray\' in \'Days Of Our Lives\'. You guys are the best !', role: 'Ex Basketball Player'}, {name: 'Milica Dabović', text: 'Making my portfolio with this helped me get my role as \'Dr. Drake Ramoray\' in \'Days Of Our Lives\'. You guys are the best !', role: 'Ex Basketball Player'}, {name: 'Milica Dabović', text: 'Making my portfolio with this helped me get my role as \'Dr. Drake Ramoray\' in \'Days Of Our Lives\'. You guys are the best !', role: 'Ex Basketball Player'}];

function Testimonials() {

    const [active, setActive] = useState(1);

    const handleDotClick = (e) => {
        console.log(e.target.getElementAttribute('data-id')+1)
    }

    const reviewsDom = []
    reviews.forEach((rev, i) => {
        reviewsDom.push(<div key={i} className='item'>
            <AccountCircleIcon className='avatar'></AccountCircleIcon>
            <p className="text">{rev.text}</p>
            <p className='name'>{rev.name}</p>
            <p className="role">{rev.role}</p>
        </div>)
    });
    const dotsDom = [];
    reviews.forEach((rev, i) => {
        dotsDom.push(<div className='dot' key={i} onClick={handleDotClick} data-id={i}></div>)
    })


    return ( <div id="testimonials">
        <h1>Testimonials</h1>
        <div className="quote">
            <FormatQuoteIcon></FormatQuoteIcon>
        </div>
        <div className="sliderCont">
            <ArrowCircleLeftIcon className='arrowIcon'></ArrowCircleLeftIcon>
            <div className="sliderInn">
                <div className="sliderScroll">
                    {reviewsDom}
                </div>
            </div>
            <ArrowCircleRightIcon className='arrowIcon'></ArrowCircleRightIcon>
        </div>
        <div className="navigate">
            {dotsDom}
        </div>
    </div> );
}

export default Testimonials;