import Logo from '../../assets/Logo.svg';
import Nav from './nav/Nav.jsx';
import "./header.scss"
import {Link} from "react-router-dom";
function Header(){
    return(
        <header className={'header'}>
            <Link to={"/"}><img className={'logo'} src={Logo} alt={'Logo'}/></Link>
            <Nav/>
            <div className={'buttons'}>
                <button className={'buttons__btn1'}>Contact</button>
                <button className={'buttons__btn2'}>Sign up</button>
            </div>
        </header>
    )
}

export default Header