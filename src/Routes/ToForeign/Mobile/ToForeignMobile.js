import { Tab, Tabs, useMediaQuery, useTheme } from "@material-ui/core";
import MultiTrans from "Components/ToForeign/Mobile/MultiTrans";
import ReTranslate from "Components/ToForeign/Mobile/ReTranslate";
import React, { useEffect, useState } from "react";
import SwipeableViews from "react-swipeable-views";
import styled from "styled-components";
import TabPanel from "Components/TabPanel";

const Container = styled.div`
  padding-top: ${(props) => (props.mediaQuery ? "60px" : "118px")};
`;

const ToForeignMobile = ({
  original,
  onChange,
  handleTranslate,
  handleMultiTrans,
  onSelectChange,
  translation,
  result,
  similarity,
  multiDest1,
  multiDest2,
  multiTrans1,
  multiTrans2,
  multiResult1,
  multiResult2,
  multiSimil,
  turn
}) => {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const handleValueChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  
  useEffect(()=>{
    if(turn===2){
      setValue(1)
    }
  },[turn])

  return (
    <Container mediaQuery={matches}>
      <Tabs
        value={value}
        onChange={handleValueChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        aria-label="full width tabs example"
      >
        <Tab label="재번역" />
        <Tab label="다중번역 1" />
        <Tab label="다중번역 2" />
      </Tabs>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <ReTranslate
            original={original}
            onChange={onChange}
            translation={translation}
            handleTranslate={handleTranslate}
            handleMultiTrans={handleMultiTrans}
            onSelectChange={onSelectChange}
            result={result}
            jaccard={similarity ? similarity[0] : null}
            leven={similarity ? similarity[1] : null}
            turn={turn}
          />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <MultiTrans
            destination={multiDest1}
            translation={multiTrans1}
            result={multiResult1}
            jaccard={multiSimil ? multiSimil[0] : null}
            leven={multiSimil ? multiSimil[1] : null}
            turn={turn}
          />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <MultiTrans
            destination={multiDest2}
            translation={multiTrans2}
            result={multiResult2}
            jaccard={multiSimil ? multiSimil[2] : null}
            leven={multiSimil ? multiSimil[3] : null}
            turn={turn}
          />
        </TabPanel>
      </SwipeableViews>
    </Container>
  );
};

export default ToForeignMobile;
