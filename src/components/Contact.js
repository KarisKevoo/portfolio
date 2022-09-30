import $ from 'jquery';
import { FaTwitter, FaFacebookF, FaWhatsapp, FaLinkedinIn, FaGithub } from 'react-icons/fa';

//checking whether input are empty or not
$(window).ready(function () {
    $('button').on('click', function (e) {
        e.preventDefault();
        if ($('.name').val() == '') {
            $('.name').css('border', 'border: 2px solid red');
        }
        else if ($('.email').val() == '') {
            $('.email').css('border', 'border: 2px solid red');
        }
        else if ($('textarea').val() == '') {
            $('textarea').css('border', 'border: 2px solid red');
        }
        else {
            $('form').submit();
        }
    });
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
    return (
        <div className="content" id="contact">
            <section className="row" style={{ marginTop: "12%" }}>
                <div className="col col-5 column">
                    <p>Contact me</p>
                    <form action="#" method="#" className="column col-10">
                        <input type="text" className="form-control mb-2 bg-dark name" name="name" placeholder="Enter your name" />
                        <input type="email" className="form-control mb-2 bg-dark email" name="email" placeholder="Enter your email" />
                        <textarea className="form-control mb-2 bg-dark" rows="8" name="message" placeholder="Enter your message"></textarea>
                        <button name="submit">Send</button>
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