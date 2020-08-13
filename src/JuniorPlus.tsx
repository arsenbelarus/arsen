import React, {ChangeEvent, useContext, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./store/store";
import MySelect from "./common/mySelect/MySelect";
import {changeThemeAC, ThemeType} from "./store/theme-reducer";

const JuniorPlus = () => {
    const dispatch = useDispatch()
    const theme = useSelector<AppRootStateType, ThemeType>(state => state.theme)
    useEffect(() => {
        document.body.style.backgroundColor = theme.background
    }, [theme.background])
    const colors = [
        {value: "Pick the color", checked: false},
        {value: "red", checked: false},
        {value: "green", checked: false},
        {value: "white", checked: false},
        {value: "maroon", checked: false},
    ]
    const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(changeThemeAC(e.currentTarget.value))
    }


    return (
        <div>
            <MySelect options={colors} value={0} onChange={onSelectChange}/>
        </div>
    );
}

export default JuniorPlus;