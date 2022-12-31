import React, { useEffect, useState } from "react";
import axios from "axios";

function FetchGet() {
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

  async function getData() {
    const response = await axios.get("https://reqres.in/api/users?page=2");
    console.warn(response.data.data);
    setUsers(response.data.data);
  }

  useEffect(async () => {
    await getData();
  }, []);

  const onClick = () => {};

  return (
    <div>
      <h2 onClick={() => {}}>FetchGet</h2>
      {users.map((item, index) => {
        return (
          <div key={index}>
            <p></p>
            <p>id:{item.id}</p>
            <p>Email:{item.email}</p>
            <p>First Name:{item.first_name}</p>
            <p>Last Name:{item.last_name}</p>
          </div>
        );
      })}
      {/* <pre>{JSON.stringify(users, null, 2)}</pre> */}
    </div>
  );
}

export default FetchGet;
