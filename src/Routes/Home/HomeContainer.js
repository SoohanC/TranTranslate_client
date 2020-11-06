import React, { useState } from "react"
import { useHistory } from "react-router-dom";
import HomePresenter from "./HomePresenter"


const HomeContainer = ()=>{
    const history=useHistory()
    const [reRouting, setReRouting] = useState(false);

    const handleReroute = () =>{
        setReRouting(true)
        setTimeout(()=>{
            history.push("/to-foreign")
        },5000)
    }


    return(
        <HomePresenter handleReroute={handleReroute} reRouting={reRouting}/>
    )
}

export default HomeContainer