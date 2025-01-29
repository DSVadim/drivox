import "./nav.scss";
import {Link} from "react-router-dom";

function Nav(){
    return(
        <nav className={'nav'}>
            <ul className={'nav__list'}>
                <li className={'nav__item'}><a className={'nav__link'}>Service</a></li>
                <li className={'nav__item'}><a className={'nav__link'}>Cars</a></li>
                <li className={'nav__item'}><a className={'nav__link'}>Pricing</a></li>
                <li className={'nav__item'}><Link to={'/About'} className={'nav__link'}>About</Link></li>
            </ul>
        </nav>
    )
}
export default Nav