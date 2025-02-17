import Section1 from '../main/section1/Section1.jsx'
import Section2  from "./section2/Section2.jsx";
import Section3  from "./section3/Section3.jsx";
import Section4  from "./section4/Section4.jsx";
import Section5 from "./section5/Section5.jsx";
import Section6 from "./section6/Section6.jsx";
import './main.scss'
function Main(){
    return(
            <main className={'main'}>
                <Section1/>
                <Section2/>
                <Section3/>
                <Section4/>
                <Section5/>
                <Section6/>
            </main>
    )
}

export default Main