import './section5.scss'
import Select from '../../../assets/select.png'
import Book from '../../../assets/book.png'
import Drive from '../../../assets/drive.png'
import Return from '../../../assets/select.png'
function Section5(){
    return(
        <div className={'section5'}>
            <p className={'section5__title'}>HOW IT WORKS</p>
            <p className={'section5__subtitle'}>Simple Steps to Get the Car</p>
            <div className={'section5-cards'}>
                <div className={'section5-cards-cards1'}>
                    <div className={'section5-cards-cards1-card'}>
                        <div className={'section5-cards-cards1-card-texts'}>
                            <p className={'section5-cards-cards1-card-texts__title'}>Select</p>
                            <p className={'section5-cards-cards1-card-texts__subtitle'}>Choose your desired car from our
                                fleet.</p>
                        </div>
                        <img className={'section5-cards-cards1-card__img'} src={Select} alt={'select'}/>
                    </div>
                    <div className={'section5-cards-cards2-card'}>
                        <div className={'section5-cards-cards1-card-texts'}>
                            <p className={'section5-cards-cards1-card-texts__title'}>Drive</p>
                            <p className={'section5-cards-cards1-card-texts__subtitle'}>Pick up your car
                                and hit the road.</p>
                        </div>
                        <img className={'section5-cards-cards2-card__img'} src={Drive} alt={'drive'}/>
                    </div>
                </div>
                <div className={'section5-cards-cards2'}>
                    <div className={'section5-cards-cards1-card'}>
                        <img className={'section5-cards-cards1-card1__img'} src={Book} alt={'book'}/>
                        <div className={'section5-cards-cards1-card-texts'}>
                            <p className={'section5-cards-cards1-card-texts__title'}>Book</p>
                            <p className={'section5-cards-cards1-card-texts__subtitle'}>Reserve your car online or
                                through
                                our app.</p>
                        </div>
                    </div>
                    <div className={'section5-cards-cards2-card'}>
                        <img className={'section5-cards-cards2-card__img'} src={Return} alt={'return'}/>
                        <div className={'section5-cards-cards1-card-texts'}>
                            <p className={'section5-cards-cards1-card-texts__title'}>Return</p>
                            <p className={'section5-cards-cards1-card-texts__subtitle'}>Bring the car back at the end of
                                your rental period.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section5