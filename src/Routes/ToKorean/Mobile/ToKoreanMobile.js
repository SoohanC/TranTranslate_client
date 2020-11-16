import { makeStyles, Tab, Tabs, useMediaQuery, useTheme } from "@material-ui/core";
import MultiTrans from "Components/ToKorean/Mobile/MultiTrans";
import DirectTrans from "Components/ToKorean/Mobile/DirectTrans";
import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import styled from "styled-components";
import TabPanel from "../../../Components/TabPanel";

const Container = styled.div`
  padding-top: ${(props) => (props.mediaQuery ? "60px" : "118px")};
`;

const useStyles = makeStyles(theme=>({
  indicatorDark:{
    backgroundColor:"#95afc0",
  },
  indicatorBright:{
    backgroundColor:"#95afc0",
  },

}))


const ToKoreanMobile = ({
  isDarkMode,
  onChange,
  langType,
  original,
  onSelectChange,
  destination2,
  destination3,
  translation,
  result,
  turn,
  handleTranslate,

}) => {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const classes = useStyles();

  const handleValueChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Container mediaQuery={matches}>
      <Tabs
        value={value}
        onChange={handleValueChange}
        TabIndicatorProps={isDarkMode ? { className: classes.indicatorDark } : { className: classes.indicatorBright } }
        textColor="inherit"
        variant="fullWidth"
        aria-label="full width tabs example"
      >
        <Tab className="trans-tab" label="다이렉트 번역" />
        <Tab className="trans-tab" label="외국어 재번역 1" />
        <Tab className="trans-tab" label="외국어 재번역 2" />
      </Tabs>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <DirectTrans langType={langType} onChange={onChange} handleTranslate={handleTranslate} original={original} onSelectChange={onSelectChange} result={result[0]} turn={turn}/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <MultiTrans langType={langType}  original={original} destination={destination2} translation={translation[1]}
            turn={turn} result={result[1]}/>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <MultiTrans langType={langType} original={original} destination={destination3} translation={translation[2]}
            turn={turn} result={result[2]} />
        </TabPanel>
      </SwipeableViews>
    </Container>
  );
};

export default ToKoreanMobile;
