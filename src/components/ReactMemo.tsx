import React, {useState} from "react";

const NewMessageCounter = (props: {count:number})=>{
return <div> {props.count} </div>
}
const UsersSecret = (props: {users:Array<string>})=>{
return <div>{
    props.users.map((u, i)=><div key={i}> {u} </div>)
}</div>
}
const Users = React.memo(UsersSecret)
export const ReactMemo = () => {
    const [counter, setCounter]=useState(0)
    const [users, setUsers]=useState(["Nastya", "Ura", "Katya"])
    return <div>
        <button onClick={()=> setCounter(counter+1)}> + </button>
        <NewMessageCounter count={counter}/>
        <Users users={users}/>
    </div>
}
