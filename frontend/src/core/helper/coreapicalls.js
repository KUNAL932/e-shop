import {API} from "../../backend";
// import React, { Component } from 'react';



const getProducts =()=>{ 
           return fetch(`${API}product`,{
                method:"GET"
            })
            .then(response =>{
                return response.json();
            })
            .catch(err => console.log(err))
     
    
}
 

export default getProducts;

