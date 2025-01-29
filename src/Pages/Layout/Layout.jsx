import Header from "../../components/header/Header.jsx";
import Main from "../../components/main/Main.jsx";
import {Outlet} from "react-router-dom";

function Layout(){
    return(
        <>
            <Header/>
            <Main>
                <Outlet/>
            </Main>
        </>
    )
}

export default Layout