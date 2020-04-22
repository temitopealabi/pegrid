import React, { useEffect, useState } from 'react';
import { DatePicker } from 'antd';
import '../timeRelatedForm.css'
const CalenderForm = (props) => {
    function onChange(date, dateString) {
        /* date will show all the keys in the calendar moment
        dateString will sho only date format in string */
        console.log(date, dateString);
        console.log(dateString);
        props.sendDate(dateString)
    }
    const addStyle = () => {
        const inputFeatures = document.querySelector('.ant-calendar-picker')
        inputFeatures.id = "parentDateCss";
        console.log(inputFeatures, "parentDateCss");
    }

    useEffect(() => {
        addStyle();
        return () => { }
    })
    return (<div className="" >
        <DatePicker onChange={onChange} style={{ width: props.widthSize }} />
        <br />

    </div>)
}

export default CalenderForm;

