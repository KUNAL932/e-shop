import React, { Component } from 'react';
import getProducts from "../core/helper/coreapicalls";
import {API} from "../backend";
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            products :[],
        error: false
         }
         this.loadAllProducts = this.loadAllProducts.bind(this);
    }
    
    // state={
        
    // }

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
    componentDidMount() {
        document.title = `You clicked ${this.state.products} times`;
      }
    
    render() { 
        return ( 
            <div>
                     {this.loadAllProducts()}

                    {this.state.products.map((product,index) => (
                        <li key={index}>{product.name}{product.description}</li>
                    ))}
               
            </div>
         );
    }
}
 
export default Home;

