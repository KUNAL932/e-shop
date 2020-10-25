import React, { Component } from 'react';
import getProducts from "../core/helper/coreapicalls";
import {API} from "../backend";
class Home extends Component {
    state={
        products :[],
        error: false
    }

    loadAllProducts =()=> {
        fetch(`${API}product`,{
            method:"GET"
        })
        .then(response =>{
            return response.json();
        })
        .then(data =>{
            this.setState({products : data});
        });
    }
    render() { 
        return ( 
            <div>
                
            <button onClick={this.loadAllProducts}>Load Products</button>
            {
            // this.products.length > 0 && (
                <ul>
                    {this.state.products.map((product) => (
                        <li key={product.id}>{product.name}</li>
                    ))}
                </ul>
            // )
            }
            
        
            </div>
         );
    }
}
 
export default Home;