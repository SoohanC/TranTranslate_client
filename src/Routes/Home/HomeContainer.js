import React, { useState } from "react"
import { useHistory } from "react-router-dom";
import HomePresenter from "./HomePresenter"
import startSound from "../../sounds/start.mp3";

const HomeContainer = ({serverStatus})=>{
    const history=useHistory()
    const [reRouting, setReRouting] = useState(false);
    
    const handleReroute = () =>{
        setReRouting(true)
        setTimeout(()=>{
            const sound = new Audio (startSound);
            sound.play();
        },300)
        setTimeout(()=>{
            history.push("/to-foreign")
        },2000)
    }


    return(
        <HomePresenter handleReroute={handleReroute} reRouting={reRouting} serverStatus={serverStatus}/>
    )
}

export default HomeContainer