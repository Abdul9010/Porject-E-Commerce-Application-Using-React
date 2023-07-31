import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
function Cart() {
    const [state, setState] = useState(0);
    if (localStorage.getItem("cart") != null) {
        var cart = JSON.parse(localStorage.getItem("cart"));
    }

    var navigate = useNavigate();

    const removeFromCart = (id) => {
        cart = JSON.parse(localStorage.getItem("cart"));
        cart.forEach( (cartItem,i) => {
            if(cartItem.id == id){
                cart.splice(i, 1);
            }
        })
        alert("Item removed successfully");
        localStorage.setItem('cart', JSON.stringify(cart));
        setState(state + 1);
    }

    const renderCartItems = () => {
        var list = cart.map(cartItem => {
            return <tr key={cartItem.id}>
                <td className="col-sm-8 col-md-6">
                    <div className="media">
                        <a className="thumbnail pull-left" href="#"> <img className="media-object" src={cartItem.imageurl} style={{ width: "72px", height: "72px" }} /> </a>
                        <div className="media-body">
                            <h4 className="media-heading">{cartItem.name}</h4>

                        </div>
                    </div></td>


                <td className="col-sm-1 col-md-1 text-center"><strong>${cartItem.price}</strong></td>
                <td className="col-sm-1 col-md-1">
                    <button onClick={() => removeFromCart(cartItem.id)} type="button" className="btn btn-danger">
                        <span className="glyphicon glyphicon-remove"></span> Remove
                    </button></td>
            </tr>
        })
        return list;
    }

    const Shopping = () => {
        navigate("/Dashboard");
    }

    const Checkout = () => {
        navigate("/Checkout");
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-10 col-md-offset-1">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>Product</th>

                                    <th className="text-center">Price</th>

                                    <th> </th>
                                </tr>
                            </thead>
                            <tbody>

                                {renderCartItems()}
                                <tr>
                                    <td>   </td>
                                    <td>   </td>
                                    <td>   </td>
                                    <td>
                                        <button onClick={() => Shopping()} type="button" className="btn btn-default">
                                            <span className="glyphicon glyphicon-shopping-cart"></span> Continue Shopping
                                        </button></td>
                                    <td>
                                        <button onClick={() => Checkout()} type="button" className="btn btn-success">
                                            Checkout <span className="glyphicon glyphicon-play"></span>
                                        </button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cart;