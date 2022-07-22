import React,{useContext,useState} from 'react'
import {login} from "../../authContext/apiCalls";
import {AuthContext} from "../../authContext/AuthContext";
import { Link } from 'react-router-dom';
import "./login.scss";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = () => {
const [email , setEmail] = useState("");
const [password , setPassword] = useState("");
const {dispatch} = useContext(AuthContext);

const handleLogin = (e) =>{
  e.preventDefault();
  login({email, password} , dispatch);
};


  return (
    <div className='login'>
    <div className='top'>
    <div className='wrapper'>
    <h2 className='logo'>
    Ysflix
    </h2>
   
    </div>
    </div>
    <div className='container'>
  <Form>
  <h2>Log In</h2>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
  </Form.Group>
  <Button variant="primary" type="submit" onClick={handleLogin}>
    Submit
  </Button>
  <span>Create Acount ? <Link to="/register" style={{"color":"white" ,"textDecoration":"none" ,"cursor":"pointer"}}>Register Here</Link></span>
</Form>
    </div>
    </div>
  )
}

export default Login