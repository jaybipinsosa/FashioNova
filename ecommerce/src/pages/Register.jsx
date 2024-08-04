import styled from "styled-components";
import { mobile } from "../responsive";
import { useState } from 'react'
import { useNavigate } from "react-router";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://img.freepik.com/free-photo/magnificent-woman-long-bright-skirt-dancing-studio-carefree-inspired-female-model-posing-with-pleasure-yellow_197531-11084.jpg?w=1380&t=st=1665221640~exp=1665222240~hmac=ca6e4254643ad31e31f16c21de50ea5d316746dcf088762fe6e2dbe872ed3f6d")
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
  ${mobile({ width: "75%" })}
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
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #C67600;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  const [user, setUser] = useState({
    username:"", email:"", password:""
  });

  const navigate = useNavigate()

	// const [name, setName] = useState('')
  // const [lastname, setLastname] = useState('')
  const [username, setUsername] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	async function PostData(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:5000/api/auth/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username,
				email,
				password,
			}),
		})

		const data = await response.json()

    if (data.status === 500 || !data) {
      window.alert("Invalid Registeraton");
      console.log("Invalid Registeraton");
    }else {
      window.alert("Registeraton Successfully");
      console.log("Registeraton Successfully");

      // navigate.push("/login");
    }
    
		// if (data.status === 'ok') {
		// 	navigate.push('/login')
		// }
	}

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
        {}
          <Input 
          value={username}
					onChange={(e) => setUsername(e.target.value)}
					type="text"
					placeholder="User Name"
          />
          <Input 
          value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					placeholder="Email"
          />
          <Input 
          value={password}
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="Password"
          />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={PostData}>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
