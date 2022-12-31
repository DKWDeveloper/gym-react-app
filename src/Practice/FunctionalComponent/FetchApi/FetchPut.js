import React, { useEffect } from "react";
import axios from "axios";
export default function FetchPut() {
  const baseURL = "https://jsonplaceholder.typicode.com/posts/100";
  const obj = {
    title: "Put updated data",
    body: " This is updated data",
  };

  // fetch(baseURL, {
  // 	method: "PUT",
  // 	headers: { 'Content-Type': 'application/json' },
  // 	body: JSON.stringify(obj)
  // }).then((resp) => {
  // 	resp.json().then((result) =>console.log(result))
  // 	console.log(resp)
  // });

  // const updateData = async () => {
  // 	const putData = await axios.put(baseURL,obj).then((resp) =>{
  // 		console.log(resp.data)
  // 	});

  const updateData = async () => {
    const putData = await axios.delete(baseURL).then((resp) => {
      console.log(resp.data);
    });
  };
  // updateData();

  useEffect(() => {
    updateData();
  });

  return (
    <div>
      <h2>Update data using Fetch and Axios Api </h2>
    </div>
  );
}
