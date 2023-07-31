import axios from "axios";
import { useState } from 'react';
import React from 'react';
function Adminadd(){

    const [product, setProduct] = useState({
        "name": "",
        "price": 0,
        "description": "",
        "imageurl": "",
        "seller": ""

    })
    var formRef = React.useRef();

    const addProduct = (event) => {
        event.preventDefault();
        axios.post("http://localhost:9999/product/add", product).then(
            response => {
                console.log(response);
                setProduct(response.data);
                formRef.current.reset();
                alert("product added succesfully");
            },
            error => {
                console.log(error);
            }
        )
    }
   
    return (

        <div>

<div class="container mt-3">
                <form ref={formRef}>
                    <div className="row">
                        <div className="col">
                            <input  type="text" className="form-control" placeholder="Enter product name" name="name" value={product.name} onChange={(e) => setProduct({ ...product, name: e.target.value })} />
                        </div>
                        <div className="col">
                            <input  type="number" className="form-control" placeholder="Enter price" name="price" value={product.price} onChange={(e) => setProduct({ ...product, price: e.target.value })}/>
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Enter Description" name="description" value={product.description} onChange={(e) => setProduct({ ...product, description: e.target.value })} />
                        </div>
                    </div>
                    <br></br>
                    <div className="row">
                        <div className="col">
                            <input  type="text" className="form-control" placeholder="Enter Image URL" name="imageurl" value={product.imageurl} onChange={(e) => setProduct({ ...product, imageurl: e.target.value })} />
                        </div>
                        <div className="col">
                            <input  type="text" className="form-control" placeholder="Enter Seller" name="seller" value={product.seller} onChange={(e) => setProduct({ ...product, seller: e.target.value })} />
                        </div>
                    </div>
                    <br></br><br></br>
                    <center><button onClick={addProduct} className="btn btn-primary">Add Product</button></center>
                </form>
            </div>
        </div>
    )
}
export default Adminadd;