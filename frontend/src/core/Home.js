import React, { Component } from 'react';
import getProducts from "../core/helper/coreapicalls";
import {API} from "../backend";
import Base from "./Base";
import "../style.css";
import Card from "./Card";
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
            else{this.setState({products : data})}
            
        });
    }

    render() { 
        return ( 
            
            
                <Base title="Home Page" description="Welocome to E-commerce website">
                     {this.loadAllProducts()}
                     <div className="row">
                         {this.state.products.map((product,index)=>{
                             return (
                                 <div key={index} className="col-4 mb-4">
                                     <Card product={product}/>
                                 </div>
                             )
                         })}
                     </div>
               
                     </Base>
         );
    }
}
 
export default Home;

