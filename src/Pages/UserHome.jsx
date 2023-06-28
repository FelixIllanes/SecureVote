import { Outlet } from "react-router-dom";
import SideBarUser from "../Components/Side_bar/side_bar_user";

export default function UserHome(){
    return(
        <>
            <SideBarUser>
                <Outlet />
            </SideBarUser>    
        </>
    )
}