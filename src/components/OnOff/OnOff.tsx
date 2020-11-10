import React, {useState} from 'react'
type PropsType = {
    on: boolean
    setOn: (value: boolean) => void
}



export default function OnOff(props: PropsType) {


    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: props.on ? "green" : "white"
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '6px',
        padding: '2px',
        backgroundColor: props.on ? "white" : "red"
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '6px',
        padding: '2px',
        backgroundColor: props.on ? "green" : "red"
    }

    const onCliced = (value: boolean) => {
       props.setOn(value)
    }
    return <div>
        <div style={onStyle} onClick={() => onCliced(true)}>On</div>
        <div style={offStyle} onClick={() => onCliced(false)}>Off</div>
        <div style={indicatorStyle}></div>
    </div>
}