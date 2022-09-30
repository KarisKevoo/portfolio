import {GiSkills} from 'react-icons/gi';
import {BsPerson, BsEye} from 'react-icons/bs';
import {AiOutlineHome, AiOutlineMail} from 'react-icons/ai';
import $ from 'jquery';

//showing scroll location
$(window).ready(function(){
    setInterval(function () {
        $('.links a').each(function(){
            if('http://'+document.location.hostname + ':'+ document.location.port + '/'+$(this).attr('href') == document.location.href){
                $(this).css('color', 'rgb(172, 47, 70)');
            }
            else{
                $(this).css('color', 'rgb(167, 248, 255)');
            }
        });
    }, 500);
});

const Header = () => {
    return (
        <header className="bg-dark text-success links">
            <a href="#home" title='home' id="1" className='bg-dark my-3'><AiOutlineHome/></a>
            <a href="#about" title='about me' className='bg-dark my-3'><BsPerson/></a>
            <a href="#skills" title='skills' className='bg-dark my-3'><GiSkills/></a>
            <a href="#mywork" title='my work' className='bg-dark my-3'><BsEye/></a>
            <a href="#contact" title='contact me' className='bg-dark my-3'><AiOutlineMail/></a>
        </header>
    );
}
 
export default Header; 