import React from 'react';
import './App.css';
import {SetTime} from "./components/UseEffect";


function App() {
    return (
        <div className='App'>
            <SetTime mode={'analog'}/>
            <SetTime mode={'digit'}/>
           </div>
    )
}

// type PageTitlePropsType = {
//     title: string
// }
// function PageTitle(props: PageTitlePropsType) {
//     return <h1>{props.title}</h1>
// }

export default App;
