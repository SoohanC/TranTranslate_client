import { Tab, Tabs, useMediaQuery, useTheme } from "@material-ui/core";
import MultiTrans from "Components/ToKorean/Mobile/MultiTrans";
import DirectTrans from "Components/ToKorean/Mobile/DirectTrans";
import React, { useState } from "react";
import SwipeableViews from 'react-swipeable-views';
import styled from "styled-components"
import TabPanel from "../../../Components/TabPanel"
const Container = styled.div`
     padding-top:${props=> props.mediaQuery ? "60px" : "118px"};
`;

const ToKoreanMobile = () =>{
    const [value, setValue] = useState(0);
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));


  const handleChange = (event, newValue) => {
    setValue(newValue);

  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

    return(
       <Container  mediaQuery={matches}>
           <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >  
          <Tab label="다이렉트 번역" />
          <Tab label="외국어 재번역 1" />
          <Tab label="외국어 재번역 2" />
        </Tabs>
        <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <DirectTrans/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <MultiTrans/>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
         <MultiTrans/>
        </TabPanel>
        </SwipeableViews>
        
       </Container>
    )
}

export default ToKoreanMobile