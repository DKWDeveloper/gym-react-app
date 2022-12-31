import React, { useEffect, useState } from 'react'
import axios from 'axios';

const baseURL = "https://jsonplaceholder.typicode.com/posts"
function FetchGet() {
   
 const obj = {
 	title: "Post Data",
 	body: "This is body part"
 }
//    fetch(baseURL, {
//    	method: "POST",
//    	body: JSON.stringify(obj),
//    	headers:{
//    		"Content-type": "application/json"
//    	}
//    }).then((response) =>{

//    	response.json().then((result)=>console.log(result))
	//    })

async function PostData(){
	const data =  await axios.post(baseURL,{obj
	}).then((result) =>{
		console.log(result.data)
	})
}
	
useEffect(()=>{
	PostData();
})

   return (
        <div>
        <h2>FetchPost</h2>
        
    {/* <pre>{JSON.stringify(users, null, 2)}</pre> */}
    </div>
    )
}

export default FetchGet;