import './section4.scss'
import Alena from '../../../assets/Alena.png'
import Left from '../../../assets/Arrow Left.svg'
import Right from '../../../assets/Arrow Right.svg'
import {useState} from "react";
function Section4(){
    const[slide,setSlide] = useState(0)
    const next = ()=>{
        setSlide(+1)%3;
    }
    const prew = ()=>{
        setSlide(-1)%3;
    }
    return(
        <section className={'section4'}>
            <p className={'section4__title'}>WHAT OUR CUSTOMERS SAY</p>
            <div className={'section4-buttons'}>
            <button className={'section4-buttons__btn'} onClick={prew}><img className={'section4-buttons__btn-img'} src={Left}/></button>
                {slide === 0 &&(
                <div className={'section4-container1'}>
                <div className={'section4-container1-block1'}>

                    <p className={'section4-container1-block1__text'}>"My Drivoxe experience was nothing short of
                        incredible. The pristine car
                        and impeccable service made my trip unforgettable.
                        I'll be back for more."</p>
                </div>
                <div className={'section4-block2'}>
                    <img className={'section4-block2__img'} src={Alena} alt={Alena}/>
                    <p className={'section4-block2__name'}>Aleea Thompson</p>
                </div>
            </div>
                )}
                {slide === 1 && (
                    <div className={'section4-container1'}>
                        <div className={'section4-container1-block1'}>

                            <p className={'section4-container1-block1__text'}>"My Drivoxe experience was nothing short
                                of
                                incredible. The pristine car
                                and impeccable service made my trip unforgettable.
                                I'll be back for more."</p>
                        </div>
                        <div className={'section4-block2'}>
                            <img className={'section4-block2__img'} src={Alena} alt={Alena}/>
                            <p className={'section4-block2__name'}>1</p>
                        </div>
                    </div>
                )}
                {slide === 2 && (
                    <div className={'section4-container1'}>
                        <div className={'section4-container1-block1'}>

                            <p className={'section4-container1-block1__text'}>"My Drivoxe experience was nothing short
                                of
                                incredible. The pristine car
                                and impeccable service made my trip unforgettable.
                                I'll be back for more."</p>
                        </div>
                        <div className={'section4-block2'}>
                            <img className={'section4-block2__img'} src={Alena} alt={Alena}/>
                            <p className={'section4-block2__name'}>2</p>
                        </div>
                    </div>
                )}
                {slide === 3 && (
                    <div className={'section4-container1'}>
                        <div className={'section4-container1-block1'}>

                            <p className={'section4-container1-block1__text'}>"My Drivoxe experience was nothing short
                                of
                                incredible. The pristine car
                                and impeccable service made my trip unforgettable.
                                I'll be back for more."</p>
                        </div>
                        <div className={'section4-block2'}>
                            <img className={'section4-block2__img'} src={Alena} alt={Alena}/>
                            <p className={'section4-block2__name'}>3</p>
                        </div>
                    </div>
                )}
                <button className={'section4-buttons__btn'} onClick={next}><img className={'section4-buttons__btn-img'}
                                                                                src={Right}/>
                </button>
            </div>
        </section>
    )
}

export default Section4