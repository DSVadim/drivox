import './footer.scss'
import {Link} from "react-router-dom";
import FAQs from "../../Pages/FAQs/FAQs.jsx";
function Footer(){
    return(
        <footer className={'footer'}>
            <div className={'footer-block1'}>
                <p className={'footer-block1__title'}>Don’t Miss a Thing</p>
                <p className={'footer-block1__subtitle'}>Subscribe to our newsletter for exclusive deals and updates.</p>
                <input type={"email"} className={'footer-block1__inp'} placeholder={'Enter email address for newsletter ...'}></input>
            </div>
            <div className={'footer-block2'}>
                <div className={'nav'}>
                    <ul className={'nav__list'}>
                        <p className={'nav__title'}>Quick Link</p>
                        <li className={'nav__item'}><a className={'nav__link'}>About us</a></li>
                        <li className={'nav__item'}><a className={'nav__link'}>Who we are</a></li>
                        <li className={'nav__item'}><a className={'nav__link'}>Contact Us</a></li>
                    </ul>
                    <ul className={'nav__list'}>
                        <p className={'nav__title'}>The Cars</p>
                        <li className={'nav__item'}><a className={'nav__link'}>How it works</a></li>
                        <li className={'nav__item'}><a className={'nav__link'}>Pick a car</a></li>
                        <li className={'nav__item'}><Link to={'/FAQs'} className={'nav__link'}>FAQs</Link></li>
                    </ul>
                    <ul className={'nav__list'}>
                        <p className={'nav__title'}>Social Media</p>
                        <li className={'nav__item'}><a className={'nav__link'}>Facebook</a></li>
                        <li className={'nav__item'}><a className={'nav__link'}>Instagram</a></li>
                        <li className={'nav__item'}><a className={'nav__link'}>Twitter</a></li>
                    </ul>
                </div>
                <p className={'footer-block2__text'}>Copyright © 2023 GoCar. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer