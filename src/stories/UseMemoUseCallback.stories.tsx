import React, {useCallback, useMemo, useState} from "react";

export default {
    title: 'useMemo',
}

export const DifficultCounting = () => {
    const [a, setA] = useState<number>(5)//input всегда даст строку, но нам нужна цифра
    const [b, setB] = useState<number>(5)

    let resultA = 1   //  используем useMemo
    let resultB = 1

    // useMemo-запомни вычисления ФОРА, пока не поменяется a
    resultA = useMemo(() => {
        for (let i = 1; i <= a; i++) {
            resultA *= i;
        }
        return resultA
    }, [a])//следим за а, пока она не поменяется, как только
    //поменяется перезапускай ФОР по новой

    for (let i = 1; i <= b; i++) {
        resultB *= i;
    }

    return (
        <div>
            {/*поэтому здесь приводим к числу при помощи Number() или + */}
            <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
            <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
            <hr/>
            <div>Result for a:{resultA}</div>
            <div>Result for b:{resultB}</div>
        </div>
    )
}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log('Users')
    return (
        <div>
            {props.users.map((u, i) => <div key={i}>{u}</div>)}
        </div>
    )
}

const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {
    console.log('Counter')
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Igor', 'Sashsa', 'Olga', 'Nadia']);

    const newArray = useMemo(() => {
        const newArray = users.filter(f => f.toLowerCase().indexOf('a') > -1)
        return newArray;
    }, [])//пустые скобки-т.е. нет никакой зависимости
    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            {counter}
            {/*фильтрануть массив имен: сначала привести к нижнему регистру, а затем найти "а"*/}
            <Users users={newArray}/>
            {/*поэтому используем  useMemo(() => {
                    function foo(){}
                  return resultfoo
              }, [a])*/}
        </div>
    )
}

//===================================================================================
//useCallBack
export const LikeUseCallBack = () => {
    console.log('LikeUseCallBack')
    const [counter, setCounter] = useState(0);
    const [books, setBooks] = useState(['React', 'JS', 'CSS', 'HTML']);

    const memorizedAddBook = useCallback(() => {
        const newUsers = [...books, 'Angular' + new Date().getTime()];
        setBooks(newUsers)
    }, [books])
    //[books]-это зависимость от newUsers, если использовать []-то будет брать
    // ['React', 'JS', 'CSS', 'HTML'] и не добавлять 'Angular'

    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            {counter}
            <Book addBook={memorizedAddBook}/>
        </div>
    )
}

const BooksSecret = (props: { addBook: () => void }) => {
    console.log('BooksSecret')
    return (
        <div>
            <button onClick={() => props.addBook()}>add book</button>
        </div>
    )
}
const Book = React.memo(BooksSecret);
//т.е. useMemo мы используем для каждого элемента, а если в элементе есть колбэк
//то ставим useCallback