import { useState } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom';

function Adminupdate(){
    var navigate = useNavigate();
    const [product, setProduct] = useState({
        "name": "",
        "price": 0,
        "description": "",
        "imageurl": "",
        "seller": ""
    })
    const Updateproduct = () => {
        axios.put("http://localhost:9999/product/update"). then(
            response => {
                console.log(response);
                alert("product updated successfully");
                navigate("/Adminproduct");
            },
            error => {
                console.log(error);
            }
        )
    }

    return(
        <div>


<div class="container mt-3">
                <form >
                    <div className="row">
                        <div className="col">
                            <input  type="text" className="form-control" placeholder="Enter product name" name="name" value={product.name} onChange={(e) => setProduct({ ...product, name: e.target.value })} />
                        </div>
                        <div className="col">
                            <input  type="number" className="form-control" placeholder="Enter price" name="price" value={product.price} onChange={(e) => setProduct({ ...product, price: parseInt(e.target.value) })}/>
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
                    <center><button onClick={Updateproduct} className="btn btn-primary">Update Product</button></center>
                </form>
            </div>
        </div>
    )
}
export default Adminupdate;