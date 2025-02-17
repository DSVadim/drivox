import './section2.scss'
import Card from "../../../components/main/section2/Card/Card.jsx";
import card1 from "../../../assets/card1.png"
import card2 from "../../../assets/card2.png"
import card3 from "../../../assets/card3.png"
import card4 from "../../../assets/card4.png"
import card5 from "../../../assets/card5.png"
import card6 from "../../../assets/card6.png"
import card7 from "../../../assets/card7.png"
import card8 from "../../../assets/card8.png"
import card9 from "../../../assets/card9.png"

function Section2(){
    return(
        <section className={'section2-cars'}>
            <div className={"cards"}>
                <Card img={card1} title="Horizon Mirage Convertible" text="$49/day" />
                <Card img={card2} title="Zephyr A4 Stratos" text="$79/day" />
                <Card img={card3} title="Aurora X5 Nebula" text="$99/day" />
                <Card img={card4} title="Vanguard CX2 Convertible" text="$59/day" />
                <Card img={card5} title="Stellar Orion Hybrid" text="$39/day" />
                <Card img={card6} title="Vanguard C-Class Coupe" text="$69/day" />
                <Card img={card7} title="Equinox F-Eclipse" text="$109/day" />
                <Card img={card8} title="Radiant Solstice Automobiles" text="$89/day" />
                <Card img={card9} title="Zenith Tempest" text="$129/day" />
            </div>
        </section>
    )
}

export default Section2