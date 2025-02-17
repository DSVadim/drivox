import './section1.scss'
import About from '../../../assets/About.png'
function Section1(){
    return(
        <section className={'section1-about'}>
            <p className={"section1__title"}>Who We are</p>
            <img className={'section1__img'} src={About} alt={'About'}/>
        </section>
    )
}
export default Section1