import './section3.scss'
import cars from '../../../assets/section3.png'
function Section3(){
    return(
        <div className={'section3'}>
            <div className={'section3-block1'}>
                <p className={'section3-block1__title'}>Why Choose Drivoxe?</p>
                <p className={'section3-block1__subtitle'}>Join our satisfied customers who trust us for their journeys. We
                    serve with a lot of values that you can feel directly.</p>
            </div>
            <img className={'section3__img'} src={cars} alt={'Cars'}/>
        </div>
    )
}

export default Section3