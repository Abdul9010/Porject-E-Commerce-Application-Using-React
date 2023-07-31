import {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
function Register() {

   const [form, setForm] = useState();
   var navigate = useNavigate();
   const update = (event) => {
    var value = event.target.value;
    var name = event.target.name;
    setForm({...form,[name]: value});
   }

   const Register = (event) => {
    event.preventDefault();
    console.log(form);
    axios.post("http://localhost:9999/register",form).then(
        response => {
            console.log("response", response);
            alert("registered successfully");
            navigate("/Login");
        },
        error => {
            console.log(error);
        }
    )
   }
    return (
        <>
            <div className="container mt-3">
               
                <form>
                    <div className="row">
                        <div className="col">
                            <input onChange={update} type="text" className="form-control" placeholder="Enter email" name="email" />
                        </div>
                        <div className="col">
                            <input onChange={update} type="text" className="form-control" placeholder="Enter username" name="username" />
                        </div>
                    </div><br></br>
                    <div className="row">
                        <div className="col">
                            <input onChange={update} type="password" className="form-control" placeholder="Enter password" name="password" />
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
export default Register;