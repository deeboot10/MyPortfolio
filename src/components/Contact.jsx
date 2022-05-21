import SendIcon from '@mui/icons-material/Send';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Social from './Social';

function Contact() {
    return ( <div id="contact">
        <h1>Contact</h1>
        <div className="container">
            <div className="message">
                <div className="abs">
                    <label htmlFor="name">Name</label>
                    <input type="text" name='name' placeholder='Your Name'/>
                </div>
                <div className="abs">
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' placeholder='your@email.com'/>
                </div>
                <div className="abs">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" cols="30" rows="6"  placeholder='Type your message ...'></textarea>
                </div>
                <button>Send <SendIcon/></button>
            </div>
            <div className="info">
                <div className="items">
                    <div className="item">
                        <div className="circle"><AlternateEmailIcon/></div>
                        uroskrupnikovic@yahoo.com
                    </div>
                    <div className="item">
                        <div className="circle"><LocalPhoneIcon/></div>
                        +381 640 482 369
                    </div>
                    <div className="item">
                        <div className="circle"><LocationOnIcon/></div>
                        Karađorđeva 14, Čačak, Serbia
                    </div>
                </div>
                <Social></Social>
            </div>
        </div>
        <div className='credit'>Made by <a target='_blank' href="https://github.com/deeboot10">Uroš.</a> 🐢</div>
    </div> );
}

export default Contact;