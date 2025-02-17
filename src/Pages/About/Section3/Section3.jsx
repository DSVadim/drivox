import './section3.scss'
import Card1 from '../../../assets/card1.svg'
import Card2 from '../../../assets/card2.svg'
import Card3 from '../../../assets/card3.svg'
import Card4 from '../../../assets/card4.svg'
function Section3(){
    return(
        <section className={'section3-about'}>
            <h2 className={'section3__title'}>Why Choose Drivoxe?</h2>
            <div className={'section3-cards'}>
                <div className={'section3-cards__card'}>
                    <div className={'section3-cards__card-box'}>
                        <img className={'section3-cards__card-box-img'} src={Card1} alt={"card1"}/>
                        <p className={'section3-cards__card-box-title'}>Quality & Variety</p>
                    </div>
                    <p className={'section3-cards__card-text'}>Discover our diverse range of meticulously maintained
                        vehicles, ensuring you always drive in style. From sleek sedans to rugged SUVs, our fleet offers
                        the perfect ride for every occasion. We meticulously maintain each vehicle to the highest
                        standards, ensuring not just style but also performance and reliability on your journey.</p>
                </div>
                <div className={'section3-cards__card'}>
                        <div className={'section3-cards__card-box'}>
                            <img className={'section3-cards__card-box-img'} src={Card2} alt={"card2"}/>
                            <p className={'section3-cards__card-box-title'}>Affordable Rates</p>
                        </div>
                        <p className={'section3-cards__card-text'}>We believe that luxury travel should be accessible to
                            all. We offer competitive prices without hidden fees, giving you the freedom to experience
                            the comfort and style of our premium vehicles without breaking the bank. We're committed to
                            providing affordable luxury for your travels.</p>
                </div>
                <div className={'section3-cards__card'}>
                            <div className={'section3-cards__card-box'}>
                                <img className={'section3-cards__card-box-img'} src={Card3} alt={"card3"}/>
                                <p className={'section3-cards__card-box-title'}>Easy Booking</p>
                            </div>
                            <p className={'section3-cards__card-text'}>Reserving your dream car is a breeze with
                                Drivoxe.
                                Our user-friendly online platform and mobile app make the booking process
                                straightforward
                                and efficient. In just a few clicks, you can secure your choice of vehicle and hit the
                                road,
                                ensuring a seamless and hassle-free experience from start to finish.</p>
                </div>
                <div className={'section3-cards__card'}>
                                <div className={'section3-cards__card-box'}>
                                    <img className={'section3-cards__card-box-img'} src={Card4} alt={"card4"}/>
                                    <p className={'section3-cards__card-box-title'}>Customer Satisfaction</p>
                                </div>
                                <p className={'section3-cards__card-text'}>Our loyal customers trust Drivoxe for the
                                    excellence
                                    of our service and the exquisite selection in our fleet. From the moment you book to
                                    the
                                    final mile of your journey, we are dedicated to providing top-notch service. We
                                    pride
                                    ourselves on our responsive customer support, available 24/7 to assist you. Your
                                    satisfaction is our ultimate reward.</p>
                </div>
            </div>
        </section>
)
}

export default Section3