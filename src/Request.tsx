import React, {ChangeEvent, useState} from 'react';
import MyButton from "./common/myButton/MyButton";
import MyCheckbox from "./common/myCheckbox/MyCheckbox";
import {userApi} from "./api/api";

const Request = () => {

    let result: boolean;
    let [status, setStatus] = useState<string>()
    let [info, setInfo] = useState<string>()
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        result = e.currentTarget.checked
    }
    const onClick = async () => {
        try {
            const response = await userApi.post(result)
            if (response.status === 200) {
                setStatus(response.data.errorText)
                setInfo(response.data.info)
            }
        } catch (error) {
            if (error.response) {
                // Request made and server responded
                setStatus(error.response.data.errorText);
                setInfo(error.response.data.info);
            } else if (error.request) {
                // The request was made but no response was received
                alert(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
        }
    }

return (
    <div style={{margin: "50px auto", width: "fit-content", color: "ivory", borderTop: "2px solid ivory"}}>
        <h1> Click post button with checkbox checked or not and watch the result</h1>
        <MyButton value={"post"} onClick={onClick} isStandard={true}/>
        <MyCheckbox label={"success"} id={"success"} onChange={onChange}/>
        { status && info && <span> `Status: ${status}. Info ${info}` </span> }
    </div>
);
}

export default Request;