import $ from 'jquery';
import { FaTwitter, FaFacebookF, FaWhatsapp, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import emailjs from "@emailjs/browser";
import {TiTick} from 'react-icons/ti';

//checking whether input are empty or not
$(window).ready(function () {
    //hovering social links
    $('.social a').hover(function () {
        $(this).css('width', '19vh').css('height', '19vh');
    }, function () {
        $(this).css('width', '20vh').css('height', '20vh');
    });
});
const Contact = () => {
    const socialstyle = {
        width: "20vh",
        height: "20vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "10px",
        borderRadius: "15px",
        color: "white",
        fontSize: "4vmin",
        transition: ".4s"
    }
    const tickStyle ={
        background: 'transparent',
        fontSize: '40px', 
        paddingRight: '3px' 
    }

    //form handler
        const sendEmail = (e) => {
          e.preventDefault();
          $('input, textarea').val('');
          emailjs.sendForm('service_e9u9u1u', 'template_ca8wkxj', e.target, 'R4IdCsR1kcUa4ae0R')
            .then((result) => {
                console.log(result.text);
                $('span').show();
                setTimeout(function(){
                    $('span').fadeOut(1000);
                }, 8000);
            }, (error) => {
                console.log(error.text);
            });
        };

    return (
        <div className="content" id="contact">
            <section className="row" style={{ marginTop: "12%" }}>
                <div className="col col-5 column">
                    <p>Contact me</p>
                    <span className='bg-light' id='messageSent'><TiTick style={tickStyle}/>Message sent successfully! You will be contacted through the email you've sent.</span>
                    <form className="column col-10 form-group" onSubmit={sendEmail}>
                        <input type="text" className="form-control mb-2 bg-dark" id="name" name="user_name" placeholder="Enter your name" required/>
                        <input type="email" className="form-control mb-2 bg-dark" name="user_email" placeholder="Enter your email" required/>
                        <textarea className="form-control mb-2 bg-dark" rows="8" name="message" placeholder="Enter your message" required></textarea>
                        <button type="submit" className='form-control w-25 bg-dark' name="submit">Send</button>
                    </form>
                </div>
                <div className="col-6 row px-5 social">
                    <a href='https://www.facebook.com/profile.php?id=100014259484012' target="_blank" style={{ ...socialstyle, background: "#4267B2" }}><FaFacebookF style={{ background: "transparent" }} /></a>
                    <a href='https://twitter.com/KarisKevin_001' target="_blank" style={{ ...socialstyle, background: "#00acee" }}><FaTwitter style={{ background: "transparent" }} /></a>
                    <a href='https://wa.me/+254746182038' target="_blank" style={{ ...socialstyle, background: "#075e54" }}><FaWhatsapp style={{ background: "transparent" }} /></a>
                    <a href='https://www.linkedin.com/in/kevin-kariuki-1b8a58213/' target="_blank" style={{ ...socialstyle, background: "#0072b1" }}><FaLinkedinIn style={{ background: "transparent" }} /></a>
                    <a href='https://github.com/KarisKevoo' target="_blank" style={{ ...socialstyle, background: "#171515" }}><FaGithub style={{ background: "transparent" }} /></a>
                </div>
            </section>
        </div>
    );
}
export default Contact;