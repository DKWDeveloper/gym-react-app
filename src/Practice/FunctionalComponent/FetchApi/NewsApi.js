import React, { useEffect, useState } from "react";
import axios from "axios";

function NewsApi() {
    const [users, setUsers] = useState([]);

    // console.log("log")
    // useEffect(() => {
    //     const data = fetch("https://reqres.in/api/users?page=2")
    //     data.then((response) => response.json())
    //         .then((result) => setUsers(result.data))
    // }, [])
    // console.log("get")

    // -------This is using Axios api---------
    // axios.get("https://reqres.in/api/users?page=2")
    //     .then((result) => {
    //         setUsers(result.data.data)
    //         console.log(result)
    //     })
    //     .catch((err) =>{
    //         console.log("api err",err)
    //     })

    const getData = async () => {
        await axios.get("https://newsapi.org/v2/everything?q=tesla&from=2022-12-02&sortBy=publishedAt&apiKey=4fc2400088694ac5b2bf3182a836d017").then((res) => {
            console.log(res.data.articles)
            setUsers(res.data.articles)
        }).catch((error) => console.log("errror", error))
    }

    useEffect(() => {
        getData();
    }, []);

    // const onClick = () => { };

    return (
        <div>
            <h2 onClick={() => { }}>FetchGet</h2>
            {users.map((item, index) => {
                return (
                    <div key={index}>
                        <p></p>
                        <p>id:{item.id}</p>
                        <p>Author:{item.author}</p>
                        <p>Title:{item.title}</p>
                        <p>Description:{item.description}</p>
                        <img src={item.urlToImage} alt="news-img" />
                    </div>
                );
            })}
            {/* <pre>{JSON.stringify(users, null, 2)}</pre> */}
        </div>
    );
}

export default NewsApi;
