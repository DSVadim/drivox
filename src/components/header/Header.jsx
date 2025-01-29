import Logo from '../../assets/Logo.svg';
import Nav from './nav/Nav.jsx';
import "./header.scss"
function Header(){
    return(
        <header className={'header'}>
             <img className={'logo'} src={Logo} alt={'Logo'} />
            <Nav/>
            <div className={'buttons'}>
                <button className={'buttons__btn1'}>Contact</button>
                <button className={'buttons__btn2'}>Sign up</button>
            </div>
        </header>
    )
}

export default Header