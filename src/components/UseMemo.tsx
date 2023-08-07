import React, {useMemo, useState} from "react";


export const UseMemo = () => {
    const [a, setA] = useState(5)
    const [b, setB] = useState(5)

    let resultA = 1
    let resultB = 1
    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 10000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResultA *= i
        }
        return tempResultA
    }, [a])

    for (let i = 1; i <= b; i++) {
        resultB *= i
    }

    return <div>
        <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
        <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>
        <div>Result for A: {resultA}</div>
        <div>Result for B: {resultB}</div>

    </div>
}


const UsersSecret = (props: {users:Array<string>})=>{
    console.log('UsersSecret')
    return <div>{
        props.users.map((u, i)=><div key={i}> {u} </div>)
    }</div>
}
const Users = React.memo(UsersSecret)
export const HelpsReactMemo = () => {
    const [counter, setCounter]=useState(0)
    const [users, setUsers]=useState(["Nastya", "Ura", "Katya"])

    const newUsers = useMemo(()=>{
        return users.filter(u=>u.toLowerCase().indexOf('a')>-1)
    }, [users])

    const addUser = () => {
        const newUsersArray = [...users, 'Sveta'+new Date().getTime()]
        setUsers(newUsersArray)
    }

    return <div>
        <button onClick={()=> setCounter(counter+1)}> + </button>
        <button onClick={()=> addUser()}> +user </button>
     {counter}
        <Users users={newUsers}/>
    </div>
}