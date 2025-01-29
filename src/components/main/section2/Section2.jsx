import './section2.scss'
import './Card/Card.jsx'
import Card from "./Card/Card.jsx";
import card1 from "../../../assets/card1.png"
import card2 from "../../../assets/card2.png"
import card3 from "../../../assets/card3.png"
import card4 from "../../../assets/card4.png"
import card5 from "../../../assets/card5.png"
import card6 from "../../../assets/card6.png"

function Section2(){
    return(
        <section className={'section2'}>
            <div className={'section2-container1'}>
                <p className={'section2-container1__title'}>THE CARS</p>
                <p className={'section2-container1__subtitle'}>Our Impressive Fleet</p>
            </div>
            <div className={"cards"}>
                <Card img={card1} title="Horizon Mirage Convertible" text="$49/day" />
                <Card img={card2} title="Zephyr A4 Stratos" text="$79/day" />
                <Card img={card3} title="Aurora X5 Nebula" text="$99/day" />
                <Card img={card4} title="Vanguard CX2 Convertible" text="$59/day" />
                <Card img={card5} title="Stellar Orion Hybrid" text="$39/day" />
                <Card img={card6} title="Vanguard C-Class Coupe" text="$69/day" />
            </div>
        </section>
    )
}

export default Section2