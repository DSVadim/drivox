import './section5.scss'
import Achivement1 from '../../../assets/achivement1.svg'
import Achivement2 from '../../../assets/achivement2.svg'
import Achivement3 from '../../../assets/achivement3.svg'
import Achivement4 from '../../../assets/achivement4.svg'
import Achivement5 from '../../../assets/achivement5.svg'
import Achivement6 from '../../../assets/achivement6.svg'
import Achivement7 from '../../../assets/achivement7.svg'
import Achivement8 from '../../../assets/achivement8.svg'

function Section5(){
    return(
        <section className={'section5-about'}>
            <div className={'section5-texts'}>
                <p className={'section5-texts__subtitle'}>ACHIEVEMENTS</p>
                <h2 className={'section5-texts__title'}>Let’s See Our Celebrate Milestones</h2>
            </div>
            <div className={'section5-block'}>
                <div className={'section5-block-card'}>
                    <img className={'section5-block-card__img'} src={Achivement1} alt={'Achivement'}/>
                    <p className={'section5-block-card__text'}>Customer
                        Choice Award</p>
                </div>
                <div className={'section5-block-card'}>
                    <img className={'section5-block-card__img'} src={Achivement2} alt={'Achivement'}/>
                    <p className={'section5-block-card__text'}>Safety Drive Excellence</p>
                </div>
                <div className={'section5-block-card'}>
                    <img className={'section5-block-card__img'} src={Achivement3} alt={'Achivement'}/>
                    <p className={'section5-block-card__text'}>Innovation Champion</p>
                </div>
                <div className={'section5-block-card'}>
                    <img className={'section5-block-card__img'} src={Achivement4} alt={'Achivement'}/>
                    <p className={'section5-block-card__text'}>Sustainable Travel Partner</p>
                </div>
                <div className={'section5-block-card'}>
                    <img className={'section5-block-card__img'} src={Achivement5} alt={'Achivement'}/>
                    <p className={'section5-block-card__text'}>Best Customer Support</p>
                </div>
                <div className={'section5-block-card'}>
                    <img className={'section5-block-card__img'} src={Achivement6} alt={'Achivement'}/>
                    <p className={'section5-block-card__text'}>Business Growth Milestone</p>
                </div>
                <div className={'section5-block-card'}>
                    <img className={'section5-block-card__img'} src={Achivement7} alt={'Achivement'}/>
                    <p className={'section5-block-card__text'}>Community Engagement</p>
                </div>
                <div className={'section5-block-card'}>
                    <img className={'section5-block-card__img'} src={Achivement8} alt={'Achivement'}/>
                    <p className={'section5-block-card__text'}>Industry Leadership</p>
                </div>
            </div>
        </section>
    )
}

export default Section5