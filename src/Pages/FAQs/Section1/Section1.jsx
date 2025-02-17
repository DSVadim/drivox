import './section1.scss'
import FAQs from "../../../assets/FAQs.png";
function Section1(){
    return(
        <section className={'section1-faqs'}>
            <p className={"section1__title"}>Frequently Asked Questions</p>
            <img className={'section1__img'} src={FAQs} alt={'FAQs'}/>
        </section>
    )
}

export default Section1