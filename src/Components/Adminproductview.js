import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function Adminproductview(){
    if (localStorage.getItem("cart") == null) {
        localStorage.setItem('cart', JSON.stringify([]));
    }

    
    var navigate = useNavigate();

    const Update =() =>{
        navigate("/Adminupdate");
    }

    const Delete =(prodid) => {
        console.log(prodid);
        axios.delete("http://localhost:9999/product/delete", {data : {"id": prodid} }).then(
            response => {
                console.log(response);
                alert("product deleted successfully");
                navigate("/Adminproduct");
            },
            error => {
                console.log(error);
            }
        )
    }
    var product = JSON.parse(localStorage.getItem("currentProduct"))
    return(

        <div> <div className="container">
        <div className="card">
            <div className="container-fliud">
                <div className="wrapper row">
                    <div className="preview col-md-6">


                        <img width="450"height="400px" src={product.imageurl} />


                    </div>
                    <div className="details col-md-6">
                        <h3 className="product-title">{product.name}</h3>
                        <div className="rating">
                            <div className="stars">
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                            </div>
                            <span className="review-no">41 reviews</span>
                        </div>
                        <p className="product-description">{product.description}</p>
                        <h4 className="price">current price: <span>{product.price}</span></h4>
                        <div className="action" >
                            <button onClick={() => Update()} className="add-to-cart btn btn-default" type="button">Update Product</button> 
                            <button onClick={() => Delete(product.productid)} className="go-to-cart btn btn-default" type="button">Delete Product</button>

                        </div>
                       
                      
                    </div>
                </div>
            </div>
        </div>
    </div></div>
    )
}
export default Adminproductview;