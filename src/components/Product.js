import React, { Component } from "react";
import axios from "axios";
export class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pname: "",
      price: 0,
      msg:'',
      products:[]
    };
  }

  
  handlePname = (e) => {
    this.setState({ pname: e.target.value });
  };

  handlePrice = (e) => {
    this.setState({ price: e.target.value });
  };

  componentDidMount()
  {
      this.getAllProducts()
  }

  getAllProducts()
  {
    const uri='http://localhost:8080/product/allProducts'
    axios.get(uri).then(response=>{this.setState({products:response.data})}).catch(error=>console.log(error))

  }

  handleSubmit=(e)=>
  {
    e.preventDefault()
    const uri = "http://localhost:8080/product/saveProduct";
    axios
      .post(uri, this.state)
      .then((response) => 
      {
          this.setState({msg:response.data})
          this.setState({pname:'',price:0})
          this.getAllProducts()
      })
      .catch((error) => console.log(error))
  }

  handleDeleteProduct=(pid)=>
  {
      const url='http://localhost:8080/product'
        axios.delete(`${url}/${pid}`).then(response=>
            {
                this.setState({msg:response.data})
                this.getAllProducts()
            }).catch(error=>console.log(error))
  }
  render() {
    return (this.state.products.length)? <div>
    <h3>Product Management System</h3>
    <hr />
    <form onSubmit={this.handleSubmit}>
      <div className="form-group">
        <label>Product Name</label>
        <input
          onChange={this.handlePname}
          value={this.state.pname}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Product Price</label>
        <input
          onChange={this.handlePrice}
          value={this.state.price}
          className="form-control"
        />
      </div>
      <button className="btn btn-primary mt-2">Add Product</button>
       
    </form>
   <h5 className='alert alert-success mt-2'>{this.state.msg}</h5>
   <hr/>
   <h5>Available Products</h5>
 
   <table className='table table-bordered table-hover'>
       <thead>
        <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th></th>
        </tr>
       </thead>
       <tbody>
           {
            this.state.products.map(product=>
                (
                    <tr>
                        <td>{product.pid}</td>
                        <td>{product.pname}</td>
                        <td>{product.price}</td>
                        <td><button onClick={()=>this.handleDeleteProduct(product.pid)} className='btn btn-danger'>Delete</button></td>
                    </tr>
            ))
           }
       </tbody>
   </table>
  </div>:<div>
  <h3>Product Management System</h3>
    <hr />
  <form onSubmit={this.handleSubmit}>
      <div className="form-group">
        <label>Product Name</label>
        <input
          onChange={this.handlePname}
          value={this.state.pname}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Product Price</label>
        <input
          onChange={this.handlePrice}
          value={this.state.price}
          className="form-control"
        />
      </div>
      <button className="btn btn-primary mt-2">Add Product</button>
       
    </form>
    <h5 className='text-danger'>products not available</h5></div>
  }
}

export default Product;
