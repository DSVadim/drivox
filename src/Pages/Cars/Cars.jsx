import Header from "../../components/header/Header.jsx";
import Section1 from "./Section1/Section1.jsx";
import Section2 from "./Section2/Section2.jsx";
import Section3 from "./Section3/Section3.jsx";
import Footer from "../../components/footer/Footer.jsx";
function Cars(){
    return(
        <>
            <Header/>
            <main>
               <Section1/>
                <Section2/>
                <Section3/>
            </main>
            <Footer/>
        </>
    )
}
export default Cars