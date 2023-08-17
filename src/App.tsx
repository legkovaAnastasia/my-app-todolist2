import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import Rating, {RatingValueType, Star} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/Accordion/UncontrolledAccordion";
import UncontrolledRating from "./components/Rating/UncontrolledRating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {
    ControlledCheckbox,
    ControlledInput, ControlledSelect,
    GetValueOfUncontrolledInputByBtnPress,
    TrackValueOfUncontrolledInput
} from "./components/Input";
import {Select} from "./components/Select/Select";
import {HelpsReactMemo, LikeUseCallback, UseMemo} from "./components/UseMemo";


function App() {
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [on, setOn] = useState<boolean>(false)
    const [switchOn, setSwitchOn] = useState<boolean>(false)
    const [value, setValue] = useState('2')
    return (
        <div className='App'>
            {/*/!*<OnOff on={on} onChange={setOn}/>*!/*/}
            {/*<UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}*/}
            {/*<UncontrolledAccordion titleValue={"Menu"} />*/}
            {/*<UseMemo/>*/}
            {/*<UseMemo/>*/}
            {/*<HelpsReactMemo/>*/}
            <LikeUseCallback/>
            {/*<Accordion titleValue={'Users'} collapsed={accordionCollapsed} onChange={()=>setAccordionCollapsed(!accordionCollapsed)}/>*/}
            {/*<UncontrolledRating />*/}
            {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}
            {/*<TrackValueOfUncontrolledInput/>*/}
            {/*<GetValueOfUncontrolledInputByBtnPress/>*/}
            {/*<ControlledInput/>*/}
            {/*<ControlledCheckbox/>*/}
            {/*<ControlledSelect/>*/}
            {/*<Accordion titleValue={'Menu'} collapsed={accordionCollapsed} onChange={()=>setAccordionCollapsed(!accordionCollapsed)}*/}
            {/*           items={[{title:'www', value:1}, {title:'zdss', value:2}, {title:'qqq', value:3}]} onClick={()=>{console.log('was clicked')}}/>*/}
        {/*<Select value={value} onChange={setValue} items={[{title:'ooo', value:'1'}, {title:'wwww', value:'2'}, {title:'xxxx', value:'3'}]}/>*/}
        {/*<Select onChange={()=>{}} items={[{title:'ooo', value:'1'}, {title:'wwww', value:'2'}, {title:'xxx', value:'3'}]} onClick={()=>{console.log('was clicked')}}/>*/}
        </div>
    )
}

type PageTitlePropsType = {
    title: string
}
function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}

export default App;
