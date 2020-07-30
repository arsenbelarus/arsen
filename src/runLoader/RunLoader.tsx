import React from "react";
import MyButton from "../common/myButton/MyButton";
import {useDispatch} from "react-redux";
import {loadingFalseAC, loadingTrueAC} from "../store/main-reducer";

type RunLoaderPropsType = {}

const RunLoader = (props: RunLoaderPropsType) => {

    const dispatch = useDispatch()
    const runLoaderButton = () => {
        dispatch(loadingTrueAC())
        setTimeout(() => dispatch(loadingFalseAC()), 3000)
    }

    return (
        <div style={{margin: "0 auto", width: "80%", textAlign: "center", borderBottom: "2px solid white"}}>
            <p style={{color: "white", textAlign: "center", fontSize: "1.5em"}}>
                By clicking this button you will simulate app loading for 3 seconds</p>
            <MyButton isStandard={true} value={"Run Loader"} onClick={runLoaderButton}/>
        </div>
    )
}

export default RunLoader