import { useState } from "react";
import styled from "styled-components";
import axios from 'axios';
import NavLink from 'react-dom'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  background-color:Teal;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;

`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  outline:none;
  border:none;
`;

const Agreement = styled.span`
  font-size: 15px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;
const Register = () => {
  const [username,setusername]=useState(" ");
  const [phonenumber,setphonenum]=useState(" ");
  const [email,setEmail]=useState(" ");
  const [password,setPassword]=useState(" ");
  const [error, seterror] = useState(false)
  const handlesubmit = async (e) => {
    e.preventDefault();
    seterror(false);
    try {
       const res = await axios.post("http://localhost:5000/api/auth/register", {
          username,
          phonenumber,
          email,
          password,
       });
       console.log(res.data);
       res.data && window.location.replace("/login")
    } catch (err) {
       seterror(true);
    }
 }
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={handlesubmit}>
          <Input placeholder="Name" type="text" onChange={(e)=>setusername(e.target.value)}/>
          <Input placeholder="phonenumber" type="text"  onChange={(e)=>setphonenum(e.target.value)}/>
          <Input placeholder="Email" type="email" onChange={(e)=>setEmail(e.target.value)}/>
          <Input placeholder="Password" type="password" onChange={(e)=>setPassword(e.target.value)}/>
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button type="submit">CREATE</Button>
        </Form>
            {error && <span style={{ color: "red", marginTop: "10px" }}>something went wrong ! or you already Registered !</span>}
      </Wrapper>
    </Container>
  );
};

export default Register;