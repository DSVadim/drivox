import Header from "../../components/header/Header.jsx";
import Main from "../../components/main/Main.jsx";
import Footer from "../../components/footer/Footer.jsx";
import {Outlet} from "react-router-dom";

function Layout(){
    return(
        <>
            <Header/>
            <Main>
                <Outlet/>
            </Main>
            <Footer/>
        </>
    )
}

export default Layout