import './section1.scss'
import Cars from "../../../assets/Cars.png";
function Section1(){
    return(
        <section className={'section1-cars'}>
            <p className={"section1__title"}>Our Impressive Fleet</p>
            <img className={'section1__img'} src={Cars} alt={'Cars'}/>
        </section>
    )
}

export default Section1