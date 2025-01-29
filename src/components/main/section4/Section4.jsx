import './section4.scss'
import Alena from '../../../assets/Alena.png'
function Section4(){
    return(
        <div className={'section4'}>
            <p className={'section4__title'}>WHAT OUR CUSTOMERS SAY</p>
            <p className={'section4__text'}>"My Drivoxe experience was nothing short of incredible. The pristine car and impeccable service made my trip unforgettable.
                I'll be back for more."</p>
            <div className={'section4-block1'}>
                <img className={'section4-block1__img'} src={Alena} alt={Alena}/>
                <p className={'section4-block1__name'}>Aleea Thompson</p>
            </div>
        </div>
    )
}
export default Section4