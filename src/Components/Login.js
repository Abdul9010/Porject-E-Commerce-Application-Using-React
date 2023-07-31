import { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
function Login() {

    const [loginform, setLoginForm] = useState();
    var navigate = useNavigate();

    const update = (event) => {
        var value = event.target.value;
        var name = event.target.name;
        setLoginForm({ ...loginform, [name]: value });
    }

    const login = (event) => {
        event.preventDefault();
        console.log(loginform);
        axios.post("http://localhost:9999/login", loginform).then(
            response => {
                console.log("response", response);
                if(response.status == 200){
                    alert("Login Success ");
                    navigate('/Dashboard');
                }
                
            },
            error => {
                console.log(error);
                alert("Please Enter the correct Username and Password");
            }
        )
    }

    const Register =() => {
        navigate('/Register');
    }
    return (
        <>
            <div className="container mt-3">

                <form> 

                    <div className="row">
                        <div className="col">
                            <input onChange={update} type="text" className="form-control" placeholder="Enter username" name="username" />
                        </div>
                        
                        
                        <div className="col">
                            <input onChange={update} type="password" className="form-control" placeholder="Enter password" name="password" />
                        </div>
                    </div><br></br>
                    <div className="row">
                        <div className="col">
                            <button onClick={login} className="btn btn-primary">Login</button>
                        </div>
                        <div className="col">
                            <button onClick={Register} className="btn btn-primary">Register</button>
                        </div>
                    
                        
                    </div> 
                      
                </form>
            </div>
        </>
    )
}
export default Login;