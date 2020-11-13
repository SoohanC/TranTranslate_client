import { translateAPI } from "api";
import React, { useState } from "react"
import ToForeignPresenter from "./ToForeignPresenter"
import completeSound from "../../sounds/finished.wav"
import ToForeignMobile from "./Mobile/ToForeignMobile"
import { Hidden } from "@material-ui/core";
import Loading from "Components/Loading"

const ToForeignContainer = ()=>{
    const [totalCost,setTotalCost] = useState(0)
    const [original,setOriginal] = useState("");
    const [translation,setTranslation] = useState("");
    const [destLanguage,setDestLanguage] = useState("en");
    const [result,setResult] = useState("");
    const [similarity,setSimilarity] = useState([]);
    const [multiDest1,setMultiDest1] = useState("jp");
    const [multiDest2,setMultiDest2] = useState("cn");
    const [multiTrans1,setMultiTrans1] = useState("");
    const [multiTrans2,setMultiTrans2] = useState("");
    const [multiResult1,setMultiResult1] = useState("");
    const [multiResult2,setMultiResult2] = useState("");
    const [multiSimil,setMultiSimil] = useState([]);
    const [loading,setLoading] = useState(false);
    const [turn,setTurn] = useState(0);


    const onChange = (e) =>{
        const {value} = e.target;
        if(value.length<=100){
            setOriginal(value);
        }
    }

    const onSelectChange =(e)=>{
        const {value} = e.target;
        setDestLanguage(value);
        switch(value){
            case "en":
                setMultiDest1("jp")
                setMultiDest2("cn")
                break;
            case "jp":
                setMultiDest1("en")
                setMultiDest2("cn")
                break;
            case "cn":
                setMultiDest1("en")
                setMultiDest2("jp")
                break;
            default:
                break;
        }
    }
    const toPerString = (number)=>{
        const result = Math.floor(number*100)
        return `${result}%`;
    }

    const handleTranslate = async() =>{
        if(original !== ""){
            const requestData = {
                source:original.replaceAll("\n"," "),
                to:destLanguage,
            }
            try {
                setLoading(true)
                const res = await translateAPI.translate(requestData)
                const transResult = res.data;
                setTranslation(transResult.translation)
                setResult(transResult.result)
                setSimilarity([toPerString(transResult.jaccard),toPerString(transResult.leven)])
                let cost  = totalCost + original.replaceAll("\n"," ").length + transResult.translation.length;
                setTotalCost(cost)
                const sound = new Audio(completeSound);
                sound.volume=0.5;
                sound.play();
                setTurn(1)
            } catch (err) {
                console.log(err)
            }finally{
                setLoading(false)
            }
        }
    }
    
    const handleMultiTrans =async() =>{
        if(translation !== ""){
            const requestData = {
                original:original,
                source:translation.replaceAll("\n"," "),
                from:destLanguage,
                to1:multiDest1,
                to2:multiDest2,
            }
            try {
                setLoading(true)
                const res = await translateAPI.multiTrans(requestData)
                const transResult = res.data;
                setMultiTrans1(transResult.trans1);
                setMultiTrans2(transResult.trans2);
                setMultiResult1(transResult.result1);
                setMultiResult2(transResult.result2);
                setMultiSimil([toPerString(transResult.jac1),toPerString(transResult.lev1),toPerString(transResult.jac2),toPerString(transResult.lev2)])
                let cost = totalCost + translation.replaceAll("\n"," ").length*2 + transResult.trans1.length +transResult.trans2.length;
                setTotalCost(cost)
                const sound = new Audio(completeSound);
                sound.volume=0.5;
                sound.play();
                setTurn(2)

                
            } catch (error) {
                console.log(error)
            }finally{
                setLoading(false)
            }
        }
    }

    return(
        <>
        <Hidden smDown>
        <ToForeignPresenter
            totalCost={totalCost}
            original={original}
            translation={translation}
            result={result}
            similarity={similarity}
            multiDest1={multiDest1}
            multiDest2={multiDest2}
            multiTrans1={multiTrans1}
            multiTrans2={multiTrans2}
            multiResult1={multiResult1}
            multiResult2={multiResult2}
            multiSimil={multiSimil}
            onChange={onChange}
            onSelectChange={onSelectChange}
            turn={turn}
            handleTranslate={handleTranslate}
            handleMultiTrans={handleMultiTrans}
        />
        </Hidden>
        <Hidden mdUp>
            <ToForeignMobile
             original={original}
             onChange={onChange}
             translation={translation}
             handleTranslate={handleTranslate}
             handleMultiTrans={handleMultiTrans}
             onSelectChange={onSelectChange}
             result={result}
             similarity={similarity}
             multiDest1={multiDest1}
             multiDest2={multiDest2}
             multiTrans1={multiTrans1}
             multiTrans2={multiTrans2}
             multiResult1={multiResult1}
             multiResult2={multiResult2}
             multiSimil={multiSimil}
             turn={turn}
            />
        </Hidden>
        {loading? <Loading/> :null}
        </>
    )
}

export default ToForeignContainer