import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
function Dashboard() {
    if(localStorage.getItem("cart") == null){
        localStorage.setItem('cart', JSON.stringify([]));
    }
    var navigate = useNavigate();
    const [products, setProducts] = useState([]);
    useEffect(
        () => {
            axios.get("http://localhost:9999/product/list").then(
                response => {
                console.log(response);
                setProducts(response.data);
            },
                error => {
                console.log(error);
            }
            )
        },[])

        const navigateToProdcutview = (product) => {
            localStorage.setItem('currentProduct', JSON.stringify(product));
            console.log(product);
            navigate("/Productview");
        }
    const renderlist = () => {
      let list =  products.map (product => {
            var productwithui = <div className="col">
            <div className="card" onClick={() => navigateToProdcutview(product)}>
                    <img width="400px" height="400px"
                        src={product.imageurl}
                        className="card-img-top" alt="Hollywood Sign on The Hill" />
                    <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                    </div>
                </div>
            </div>
            return productwithui;
        })
        return list;
    }

    return (
       
        <div>
        
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {products.length > 0 ? renderlist() : <h1>Products Loading.....</h1>}
            </div>
        </div>
    )
}
export default Dashboard;