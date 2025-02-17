import Select from "../../../assets/select.png";
import Drive from "../../../assets/drive.png";
import Book from "../../../assets/book.png";
import Return from "../../../assets/select.png";
import './section4.scss'
function Section4(){
    return(
        <section className={'section4-about'}>
            <p className={'section4__title'}>HOW IT WORKS</p>
            <p className={'section4__subtitle'}>Simple Steps to Get the Car</p>
            <div className={'section4-cards'}>
                <div className={'section4-cards-cards1'}>
                    <div className={'section4-cards-cards1-card'}>
                        <img className={'section4-cards-cards1-card__img'} src={Select} alt={'select'}/>
                        <div className={'section4-cards-cards1-card-texts'}>
                            <p className={'section4-cards-cards1-card-texts__title'}>Select</p>
                            <p className={'section4-cards-cards1-card-texts__subtitle'}>Choose your desired car from our
                                fleet.</p>
                        </div>
                    </div>
                    <div className={'section4-cards-cards2-card'}>
                        <img className={'section4-cards-cards2-card__img'} src={Drive} alt={'drive'}/>
                        <div className={'section4-cards-cards1-card-texts'}>
                            <p className={'section4-cards-cards1-card-texts__title'}>Drive</p>
                            <p className={'section4-cards-cards1-card-texts__subtitle'}>Pick up your car
                                and hit the road.</p>
                        </div>
                    </div>
                </div>
                <div className={'section4-cards-cards2'}>
                    <div className={'section4-cards-cards1-card'}>
                        <img className={'section4-cards-cards1-card1__img'} src={Book} alt={'book'}/>
                        <div className={'section4-cards-cards1-card-texts'}>
                            <p className={'section4-cards-cards1-card-texts__title'}>Book</p>
                            <p className={'section4-cards-cards1-card-texts__subtitle'}>Reserve your car online or
                                through
                                our app.</p>
                        </div>
                    </div>
                    <div className={'section4-cards-cards2-card'}>
                        <img className={'section4-cards-cards2-card__img'} src={Return} alt={'return'}/>
                        <div className={'section4-cards-cards1-card-texts'}>
                            <p className={'section4-cards-cards1-card-texts__title'}>Return</p>
                            <p className={'section4-cards-cards1-card-texts__subtitle'}>Bring the car back at the end of
                                your rental period.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section4