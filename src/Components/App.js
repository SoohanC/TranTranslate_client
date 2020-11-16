import { serverAPI } from "api";
import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import RouterComponent from "./Router";
import Styles from "./Styles";
import globalTheme from "./globalTheme";

const App = () =>{
  const [serverStatus,setServerStatus]=useState(true);
  const [loading, setLoading]=useState(true)
  const [isDarkMode,setDarkMode] = useState(true)

  const changeMode = async() =>{
    await setDarkMode(!isDarkMode)
  }


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
    <ThemeProvider theme={globalTheme}>
      <RouterComponent serverStatus={serverStatus} loading={loading} isDarkMode={isDarkMode} setDarkMode={changeMode}/>
      <Styles isDarkMode={isDarkMode}/>
    </ThemeProvider>
    </>
  )
}

export default App;
