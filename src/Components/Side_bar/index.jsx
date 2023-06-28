import { useState } from "react";
import { FaBars, FaUserTie, FaRegChartBar, FaUsers, FaTh, FaThList, FaVoteYea,FaIdCard,FaSignOutAlt } from "react-icons/fa";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import "./sidebar.css"

const SideBar = ({children}) =>{
    const[isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen (!isOpen);
    const menuItem = [
        {
            path:"/Admin",
            name:"Inicio",
            icon: <FaTh/>
        },
        {
            path:"CreateVote",
            name:"Crear Elección",
            icon: <FaVoteYea/> 
        },
        {
            path:"UserCrud",
            name:"Votantes",
            icon: <FaUsers/>
        },
        {
            path:"PoliticalParty",
            name:"Candidatos",
            icon: <FaUserTie/>
        },
        {
            path: "CreateCensus",
            name: "Crear Padron",
            icon: <FaIdCard/>
        }
    ]
    const{ logout, user} = useAuth();


    const handleClick = () => {
        logout();
    }

    return(
        <div className = "sidebar_cotainer">
            <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
                <div className="parte_arriba">
                    <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
                    <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                        <FaBars onClick={toggle}/>
                    </div>
                </div>
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link" activeclassname="active" >
                            <div className="icon">{item.icon}</div>
                            <div style={{display: isOpen ? "block" : "none"}} className="texto_link">{item.name}</div>
                        </NavLink>
                    ))
                }

                <div className="link logout" activeclassname="active">
                    <button className="icon log" onClick={handleClick}><FaSignOutAlt/></button>
                    <div style={{display: isOpen ? "block" : "none"}} className="texto_link">Logout</div>
                </div>
            </div>
            <div>{children}</div>
        </div>
    )
}

export default SideBar