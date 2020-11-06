import { serverAPI } from "api";
import React, { useEffect, useState } from "react";
import RouterComponent from "./Router";
import Styles from "./Styles";

const App = () =>{
  const [serverStatus,setServerStatus]=useState(true);
  const [loading, setLoading]=useState(true)


  const checkStatus = async()=>{
    try {
      const res = await serverAPI.checkStatus();
      if(res.status===200 && res.data.status){
        setServerStatus(true)
      }
    } catch (error) {
       console.log(error)
       setServerStatus(false)
    } finally{
      setLoading(false)
    }
  }
  useEffect(()=>{
    checkStatus();
  },[])
  
  return(
    <>
    <RouterComponent serverStatus={serverStatus} loading={loading}/>
    <Styles/>
    </>
  )
}

export default App;
