import React, {useState} from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion';
import {Rating} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";

function App() {

    let [value, setValue] = useState<0 | 1 | 2 | 3 | 4 | 5>(1)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [on, setOn] = useState<boolean>(false)
    console.log('test for github')


  return (
    <div className="App">
        <Title title={'Title=)))))'}/>
      <Rating value={value} setValue={setValue}/>
      <Accordion title={'Привет с App компоненты'} setAccordionCollapsed={setAccordionCollapsed} accordionCollapsed={accordionCollapsed}/>
      <OnOff on={on} setOn={setOn}/>
      <OnOff on={on} setOn={setOn}/>
      <OnOff on={on} setOn={setOn}/>
      <OnOff on={on} setOn={setOn}/>
    </div>
  );
}

type PropsTitleType = {
    title: string
}

function Title(props: PropsTitleType) {
    console.log('Title')
    return <h1>
        {props.title}
    </h1>
}



export default App;
