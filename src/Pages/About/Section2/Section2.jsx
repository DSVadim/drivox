import './section2.scss'
import Car from '../../../assets/About-car.png'
function Section2(){
    return(
        <section className={'section2-about'}>
            <img className={'section2__img'} src={Car} alt={'Car'}/>
            <div className={'section2-texts'}>
                <p className={'section2-texts__subtitle'}>Our Journey</p>
                <h2 className={'section2-texts__title'}>Pioneering Premium Car Rentals</h2>
                <p className={'section2-texts__text'}>Drivoxe embarked on a remarkable journey over a decade ago, driven by a relentless passion for redefining the travel experience. From the outset, our mission was clear: to provide the finest vehicles and exceptional service to make every journey unforgettable. We've upheld our commitment
                    to delivering quality and variety, offering a diverse range of meticulously maintained vehicles to ensure you always drive in style.</p>
            </div>
        </section>
    )
}
export default Section2