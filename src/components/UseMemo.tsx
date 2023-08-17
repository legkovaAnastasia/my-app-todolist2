import React, {useCallback, useMemo, useState} from "react";


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



export const LikeUseCallback = () => {
    console.log('LikeUseCallback')
    const [counter, setCounter]=useState(0)
    const [books, setBooks]=useState(["JS", "Html", "React"])

    const newBooks = useMemo(()=>{
        return books.filter(b=>b.toLowerCase().indexOf('a')>-1)
    }, [books])

    // const addBook = () => {
    //     const newBooksArray = [...books, 'Angular'+new Date().getTime()]
    //     setBooks(newBooksArray)
    // }
    const addBookMemo=useMemo(()=>{
        return()=> {
        const newBooksArray = [...books, 'Angular'+new Date().getTime()]
        setBooks(newBooksArray)   }
    }, [books])

    const addBookMemo2=useCallback(()=>{
        const newBooksArray = [...books, 'Angular'+new Date().getTime()]
        setBooks(newBooksArray)
    }, [books])
    return <div>
        <button onClick={()=> setCounter(counter+1)}> + </button>
     {counter}
        <Book books={newBooks} addBook={addBookMemo2}/>
    </div>
}
const BooksSecret = (props: {books:Array<string>, addBook:()=>void})=>{
    console.log('BooksSecret')
    return <div>
        <button onClick={()=> props.addBook()}> +book </button>
        {
            props.books.map((b, i)=><div key={i}> {b} </div>)
        }</div>
}
const Book = React.memo(BooksSecret)