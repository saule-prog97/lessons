import React, {useState} from "react";

type PropsTypeAcordion = {
    title: string
    accordionCollapsed: boolean
    setAccordionCollapsed: (value: boolean) => void
}

export function Accordion(props: PropsTypeAcordion) {
    console.log('Accordion')

    return (
        <div>
            <AccordionTitle title={props.title} setCollapsed={ () => { props.setAccordionCollapsed(!props.accordionCollapsed) }}/>
            {!props.accordionCollapsed && <AccordionBody/>}
        </div>
    )
}

type PropsType = {
    title: string
    setCollapsed: () => void
}

function AccordionTitle(props: PropsType) {
    console.log('AccordionTitle')
    return <h3 onClick={ () => {props.setCollapsed()}}>{props.title}</h3>
}
function AccordionBody() {
    console.log('AccordionBody')
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}