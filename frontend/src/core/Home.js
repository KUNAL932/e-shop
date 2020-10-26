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

    loadAllProducts =()=> {
        getProducts()
        .then(data =>{
            if(data.error){
                this.setState({error: data.error});
            }
            else(this.setState({products : data}))
            
        });
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

