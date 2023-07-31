import {useNavigate} from 'react-router-dom';
function Admin(){
    var navigate = useNavigate();
    const products = () => {
        navigate("/Adminproduct");
    }

    const Add = () => {
        navigate("/Adminadd");
    }
    return(
       
        <div style={{backgroundColor:'lightyellow'}} >
            <br></br><br></br>
            
             <div className="row">
                        <div className="col">
                            <button onClick={products} className="btn btn-primary">Products</button>
                        </div>
                        <div className="col">
                            <button onClick={Add} className="btn btn-primary">Add New Product</button>
                        </div>
                    
            <br></br><br></br>
            <br></br><br></br>
            <br></br><br></br>
            <br></br><br></br>
            <br></br><br></br>
            <br></br><br></br>
            <br></br><br></br>
            <br></br><br></br>
            <br></br><br></br>
            <br></br><br></br>
            <br></br><br></br> <br></br><br></br> <br></br><br></br>
                    
                    </div> 
        </div>
    )
}
export default Admin;