import React, { useRef }  from "react";
import axios from "axios";

const Login = (props) => {
  const usernameRef = useRef();
  const passwordRef = useRef();
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const submit = () => {
    axios
      .post("http://localhost:5000/api/login", {
        username: usernameRef.current.value,
        password: passwordRef.current.value
      })
      .then(res => {
        console.log(res);
        // SUCCESS! Credentials are valid:
        //   1- Put the token string in local storage under a 'token' key
        localStorage.setItem("token", res.data.payload);
        // console.log(res.data.payload);
        // localStorage.setItem('token', JSON.stringify(myArray));
          // 2- Redirect users to the /quotes route
        props.history.push("/BubblePage");
      })
      .catch(error => {
        alert(error.message);
        console.log(error.message);
      });
  };
  return (
    <>
      <h1>Welcome to the Bubble App!</h1><br/>
      <div className="login">
      <div className="login-inputs">
        username <input ref={usernameRef} type="text" />
        <br />
        password <input ref={passwordRef} type="text" />
      </div>

      <div>
        <button onClick={submit}>Submit</button>
      </div>
    </div>
    </>
  );
};

export default Login;
