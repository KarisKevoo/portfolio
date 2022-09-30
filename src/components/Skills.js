import $ from 'jquery';
import {RiHtml5Line} from 'react-icons/ri';
import {TbBrandCss3} from 'react-icons/tb';
import {IoLogoJavascript} from 'react-icons/io';
import {FaReact, FaPhp} from 'react-icons/fa';
import {GrMysql} from 'react-icons/gr';
import {SiJquery} from 'react-icons/si';

//hovering the links
$(window).ready(function(){
    $('#skills a').css('text-decoration', 'none');
    $('#skills a').hover(function(){
        $(this).css("text-decoration", "underline");
    }, function(){
        $(this).css("text-decoration", "none");
    });
});

const Skills = () => {
    const linkstyle ={
        color: "rgb(167, 248, 255)"
    }
    return ( 
        <div className="content" id="skills">
                <section className="row" style={{marginTop: "15%"}}>
                    <div className="col-5 column">
                        <p>Skills</p>
                        <span style={{color: "#c1c1c1"}}>The main area of expertise is full-stack web development (both client and server side).<br></br>
                        I build fully responsive small and medium web applications using HTML5, CSS3/SCSS, JavaScript/Jquery/Ajax, React Js, PHP and MYSQL. I build user friendly user interfaces in terms of simplicity, beauty and interactive interfaces.<br></br><br></br>
                        Visit my <a href='https://www.linkedin.com/in/kevin-kariuki-1b8a58213/' target="_blank" style={linkstyle}>LinkedIn</a> profile for more details or <a href="#contact" style={linkstyle}>contact</a> me.
                        </span><br></br>
                    </div>
                    <div className="col-7 row px-5">
                        <div className='pic row'>
                        <div>
                            <span><RiHtml5Line style={{color: "#ff7b00", background: "transparent"}}/></span>
                            <span><RiHtml5Line style={{color: "#ff7b00", background: "transparent"}}/></span>
                            <span><RiHtml5Line style={{color: "#ff7b00", background: "transparent"}}/></span>
                            <span><RiHtml5Line style={{color: "#ff7b00", background: "transparent"}}/></span>
                        </div>
                        <div>
                            <span><TbBrandCss3 style={{color: "#277eef", background: "transparent"}}/></span>
                            <span><TbBrandCss3 style={{color: "#277eef", background: "transparent"}}/></span>
                            <span><TbBrandCss3 style={{color: "#277eef", background: "transparent"}}/></span>
                            <span><TbBrandCss3 style={{color: "#277eef", background: "transparent"}}/></span>
                        </div>
                        <div>
                            <span><IoLogoJavascript style={{color: "#ffee00", background: "transparent"}}/></span>
                            <span><IoLogoJavascript style={{color: "#ffee00", background: "transparent"}}/></span>
                            <span><IoLogoJavascript style={{color: "#ffee00", background: "transparent"}}/></span>
                            <span><IoLogoJavascript style={{color: "#ffee00", background: "transparent"}}/></span>
                        </div>
                        <div>
                            <span><FaReact style={{color: "#00bbff", background: "transparent"}}/></span>
                            <span><FaReact style={{color: "#00bbff", background: "transparent"}}/></span>
                            <span><FaReact style={{color: "#00bbff", background: "transparent"}}/></span>
                            <span><FaReact style={{color: "#00bbff", background: "transparent"}}/></span>
                        </div>
                        <div>
                            <span><SiJquery style={{color: "#2483e3", background: "transparent"}}/></span>
                            <span><SiJquery style={{color: "#2483e3", background: "transparent"}}/></span>
                            <span><SiJquery style={{color: "#2483e3", background: "transparent"}} /></span>
                            <span><SiJquery style={{color: "#2483e3", background: "transparent"}}/></span>
                        </div>
                        <div>
                            <span><FaPhp style={{color: "#4a3cca", background: "transparent"}}/></span>
                            <span><FaPhp style={{color: "#4a3cca", background: "transparent"}}/></span>
                            <span><FaPhp style={{color: "#4a3cca", background: "transparent"}}/></span>
                            <span><FaPhp style={{color: "#4a3cca", background: "transparent"}}/></span>
                        </div>
                        <div>
                            <span><GrMysql style={{color: "#2c5d9c", background: "transparent"}}/></span>
                            <span><GrMysql style={{color: "#2c5d9c", background: "transparent"}}/></span>
                            <span><GrMysql style={{color: "#2c5d9c", background: "transparent"}}/></span>
                            <span><GrMysql style={{color: "#2c5d9c", background: "transparent"}}/></span>
                        </div>
                        </div>
                    </div>
                </section>
        </div>
    );
}

export default Skills;