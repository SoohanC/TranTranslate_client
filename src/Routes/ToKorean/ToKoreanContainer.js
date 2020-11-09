import { translateAPI } from "api";
import React, { useState } from "react";
import ToKoreanPresenter from "./ToKoreanPresenter";
import completeSound from "../../sounds/finished.wav"

const ToKoreanContainer = () => {
  const [original, setOriginal] = useState("");
  const [langType, setLangType] = useState("en");
  const [destination1, setDestination1] = useState("");
  const [destination2, setDestination2] = useState("jp");
  const [destination3, setDestination3] = useState("cn");
  const [translation, setTranslation] =useState([]);
  const [totalCost, setTotalCost] =useState(0)
  const [result, setResult] =useState([]);
  const [turn, setTurn] = useState(0)
  const [loading, setLoading] = useState(false)

  const onChange = (e) => {
    const { value } = e.target;
    if (value.length <= 100) {
      setOriginal(value);
    }
  };

  const onSelectChange = (e) => {
    const { value } = e.target;
    setLangType(value);
    switch (value) {
      case "en":
        setDestination1("");
        setDestination2("jp");
        setDestination3("cn");
        break;
      case "jp":
        setDestination1("");
        setDestination2("en");
        setDestination3("cn");
        break;
      case "cn":
        setDestination1("");
        setDestination2("en");
        setDestination3("jp");
        break;
      default:
        setDestination1("en");
        setDestination2("jp");
        setDestination3("cn");
        break;
    }
  };
  
  const handleTranslate =async()=>{
    if(original!==""){
      const data={
        original,langType,destination1,destination2,destination3
      }
      try {
        setLoading(true)
        const res = await translateAPI.transToKor(data);
        const {trans1,trans2,trans3,result1,result2,result3}=res.data;
        const trans = [trans1,trans2,trans3]
        const receivedResult = [result1,result2,result3]
        const total = original.length*3 + trans1.length+trans2.length+trans3.length
        setTranslation(trans);
        setResult(receivedResult);
        setTotalCost(totalCost+total)
        setTurn(1)
      } catch (error) {
        console.log(error)
      }finally{
        const sound = new Audio(completeSound);
                sound.play();
        setLoading(false)
      }
    }
  }

  return (
    <ToKoreanPresenter
      onChange={onChange}
      original={original}
      onSelectChange={onSelectChange}
      destination1={destination1}
      destination2={destination2}
      destination3={destination3}
      translation={translation}
      totalCost={totalCost}
      result={result}
      loading={loading}
      turn={turn}
      handleTranslate={handleTranslate}
    />
  );
};

export default ToKoreanContainer;
