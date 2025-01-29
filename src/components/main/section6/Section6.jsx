import './section6.scss'
import Apple from '../../../assets/apple.svg'
import Google from '../../../assets/google.svg'
function Section6(){
    return(
        <div className={'section6'}>
            <div className={'section6-background'}>
                <p className={'section6-background__title'}>Ready to Go?</p>
                <p className={'section6-background__subtitle'}>Book your car wherever you are  and ride with us now!</p>
                <div className={'section6-background-icons'}>
                    <img className={'section6-background-icons__apple'} src={Apple} alt={'apple'} />
                    <img className={'section6-background-icons__google'} src={Google} alt={'google'} />
                </div>
            </div>
        </div>
    )
}

export default Section6;