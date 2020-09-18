import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

function Register(props) {
  const [user, setUser] = useState({});

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
   axios
   .post("")
   .then((res) => {
       console.log(res)
   })
   .catch((err) => {
       console.log(err)
   })
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Name" name="name" ref={register} />
        <input
          type="text"
          placeholder="Username"
          name="username"
          ref={register({ required: "Username required" })}
        />
        {errors.username && <p>{errors.username.message}</p>}
        <input
          type="password"
          placeholder="Password"
          name="password"
          ref={register({ required: true, minLength: 5 })}
        />
        {errors.password && <p>Password must include at least 5 characters</p>}
        <button>Register</button>
      </form>
    </div>
  );
}

export default Register;
