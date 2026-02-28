
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { login } from "../redux/apiCall";
import {mobile} from '../Responsive'
import {Formik,Form,input} from 'formik'
 import * as Yup from 'yup';
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5),
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "85%" })}
  
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Formfield = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled{
   color:green;
   cursor:not-allowed;
  };
`
const Error=styled.div`
color:red;
`


const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  const [username,setUsername]=useState(" ");
  const [password,setPassword]=useState(" ");
  const dispatch=useDispatch();
  const {isFetching ,error}=useSelector(state=>state.user);
  const handleClick=(e)=>{
    e.preventDefault();
    login(dispatch,{username,password})
  }
  const SignupSchema = Yup.object().shape({
   username: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
   password: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
   email: Yup.string().email('Invalid email').required('Required'),
 });
 
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
       
        <Formfield>
          <Formik    
        initialValues={{
         username: '',
         password: '',
         email:'',
       }}
       validationSchema={SignupSchema}
       onSubmit={values => {
         // same shape as initial values
         console.log(values);
       }}>
           {({ errors, touched,handleBlur,handleChange,values,handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
         <input 
           name='username'
           placeholder="username"  
           onChange={handleChange}
           onBlur={handleBlur}
           value={values.username}
           />
            {errors.username ? (
             <div>{errors.firstName}</div>
           ) : null}
          <input 
          placeholder="password" 
          name='password'
          onChange={handleChange}
           onBlur={handleBlur}
           value={values.password}
          />
              {errors.password? (
             <div>{errors.password}</div>
           ) : null}
           
          <button type='submit'>LOGIN</button>
            </Form>
           )}
           
          </Formik>
 
          {/* <Input placeholder="username" name='username' onChange={(e)=>{setUsername(e.target.value)}}/>
          <Input placeholder="password" name='password' type="password" onChange={(e)=>{setPassword(e.target.value)}}/>
          <Button onClick={handleClick} disabled={isFetching}>LOGIN</Button>
          {error && <Error>Something is wrong</Error>}
          <Link>Forgot password</Link>
          <Link>CREATE A NEW ACCOUNT</Link> */}
        </Formfield>
      </Wrapper>
    </Container>
  );
};

export default Login;