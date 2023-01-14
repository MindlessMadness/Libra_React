import { Outlet, useNavigate } from "react-router-dom";
import {FaBars, FaTimes, FaSearch} from "react-icons/fa"
import { useState } from "react";
export function Home(){
    const [key, setKey] = useState('');
    const navigate = useNavigate();
    const search = (key)=>{
        navigate(`/results/${key}`);
        window.location.reload();
    }
    return <div><div className="navBar">
        <FaBars className="navItem hamBurger" onClick={()=>{
        document.getElementById("sideBar").classList.add("expanded");
    }}/> <div className="searchDiv">
    <input type="text" value={key} id="search" className="navItem search" placeholder="Search..." onChange={(e)=>{
        setKey(e.target.value);
    }} onKeyDown={(k)=>{if(!k) return;
    if(k.key==="Enter") search(key)}}></input>
    <FaSearch className="searchIcon" color="#999" onClick={()=>{search(key)}}></FaSearch>
    </div>
    <div className="navItem Name">Libra</div>
    </div><div className="sideBar" id="sideBar" ><FaTimes className="closeNav" id="closeNav" 
    onClick={()=>{document.getElementById("sideBar").classList.remove("expanded");}}/></div>
    <Outlet/></div>;
}