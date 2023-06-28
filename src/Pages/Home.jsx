import { Outlet } from "react-router-dom";
import SideBar from "../Components/Side_bar";

export default function Home(){
    return(
        <>
            <SideBar>
                <Outlet />
            </SideBar>    
        </>
    )
}