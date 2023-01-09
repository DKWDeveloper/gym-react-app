import React from 'react'
import { useState } from 'react'
import './TodoList.css'

function TodoList() {
    const [activity, setActivity] = useState("")
    const [listData, setlistData] = useState([])

    function addActivity() {
        //This is async work means take some time

        // setlistData([...listData, activity])
        // console.log("L;;", listData);

        //This is async work means take some time
        setlistData((listData) => {
            const updateList = [...listData, activity]
            console.log(updateList)
            setActivity("")
            return updateList
        })
    }

    function removeActivity(i) {
        const deleteList = listData.filter((elem, id) => {
            return i !== id;
        })

        setlistData(deleteList);

    }

    function removeAll() {
        setlistData([])
    }

    return (
        <div className='todo'>
            <h3>My First ToDO list</h3>
            <input type='text' placeholder='Add item' value={activity} onChange={(e) => setActivity(e.target.value)} />
            <button onClick={addActivity}>Add</button>
            <p>Here is our list</p>
            {listData !== [] && listData.map((data, i) => {
                return (
                    <div key={i}>
                        <span>{data}</span>
                        <button onClick={() => removeActivity(i)}>remove</button>
                    </div>
                );
            })}

            {/* {listData.length >= 1 ? <button>Remove All</button> : ""} */}
            {listData.length >= 1 && <button onClick={removeAll}>Remove All</button>}


        </div>
    )
}

export default TodoList