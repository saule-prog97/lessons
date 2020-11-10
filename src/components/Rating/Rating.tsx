import React from "react";

type PropsTypeRating = {
    value: 0 | 1 | 2 | 3 | 4 | 5,
    setValue: (value: 0 | 1 | 2 | 3 | 4 | 5) => void
}


export function Rating(props: PropsTypeRating) {
    console.log('Rating')

    return (
        <div>
            <Star selected={props.value > 0} setSelected={props.setValue} value={1}/>
            <Star selected={props.value > 1} setSelected={props.setValue} value={2}/>
            <Star selected={props.value > 2} setSelected={props.setValue} value={3}/>
            <Star selected={props.value > 3} setSelected={props.setValue} value={4}/>
            <Star selected={props.value > 4} setSelected={props.setValue} value={5}/>
        </div>
    )
}

type PropsTypeStar = {
    selected: boolean
    value: 1 | 2 | 3 | 4 | 5
    setSelected: (value: 1 | 2 | 3 | 4 | 5) => void
}


function Star(props: PropsTypeStar) {

    return <span onClick={ () => props.setSelected(props.value)}> {props.selected ? <b>star</b> : 'star'} </span>

}