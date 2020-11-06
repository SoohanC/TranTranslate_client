import React, { useState } from "react"
import { useHistory } from "react-router-dom";
import HomePresenter from "./HomePresenter"


const HomeContainer = ({serverStatus})=>{
    const history=useHistory()
    const [reRouting, setReRouting] = useState(false);

    const handleReroute = () =>{
        setReRouting(true)
        setTimeout(()=>{
            history.push("/to-foreign")
        },2000)
    }


    return(
        <HomePresenter handleReroute={handleReroute} reRouting={reRouting} serverStatus={serverStatus}/>
    )
}

export default HomeContainer