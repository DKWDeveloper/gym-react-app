import React from 'react'
import { useState } from 'react'
// import { Data } from './Data';


const mystyle = {
    display: "flex",
    justifyContent: "center",
    alignItem: "center",
    height: "100vh"
}

const d = "https://jsonplaceholder.typicode.com/todos"
// const d = { Data }

// console.log("my data", d)


function FetchData() {

    const [title, setName] = useState("");
    const [body, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [getData, setGetData] = useState([])

    function PostData() {
        // console.warn(title, body)
        let data = { title, body }
        fetch(d, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json"
            }
        }).then((result) => {
            console.warn(result)
            result.json().then((resp) => setGetData(resp))
        })
    }


    async function GetData() {
        await fetch(d).then((result) => {
            // console.log("RRRRR:::::", result)
            result.json().then((resp) => console.log(resp))
        })

    }



    return (
        <div style={mystyle}>
            <div style={{ marginTop: "120px" }}>
                <h3>FetchData Post Api example</h3>
                <input type="text" onChange={(e) => { setName(e.target.value) }} value={title} name='name' /><br /><br />
                <input type="text" onChange={(e) => { setEmail(e.target.value) }} value={body} name='email' /><br /><br />
                <input type="text" onChange={(e) => { setMobile(e.target.value) }} value={mobile} name='mobile' /><br /><br />
                <button type='button' onClick={PostData}>Post Data</button>
                <button type='button' onClick={GetData}>Get Data</button>
                {
                    getData.map((value, i) => {
                        return (
                            <div key={i}>
                                <h2>{value.title}</h2>
                                <p>{value.body}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default FetchData