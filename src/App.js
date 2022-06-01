
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [errors, setErrors] = useState("");
  const [isSubmit, setIsSubmit] = useState(false)

  const handleChange = (event) => {
    const {name, value} = event.target;
    setValues({...values, [name] : value})
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validate(values))
    setIsSubmit(true)
  }

  useEffect(() => {
    if(Object.keys(errors).length === 0 && isSubmit ){
      console.log("Informations = ", values)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors])

  const validate = (input) => {
    const errorMsg = {}
    const regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if(input.username === ""){
      errorMsg.username = "Please enter your username"
    }

    if(input.email === ""){
      errorMsg.email = "Please enter your email"
    }else if(!regex.test(input.email)){
      errorMsg.email = "This is not a valid email format!"
    }

    if(input.password === ""){
      errorMsg.password = "Please enter password"
    }else if(input.password.length <= 5){
      errorMsg.password = "Password must be more than 5 characters!"
    }else if(input.password.length >= 12){
      errorMsg.password = "Password can't be more than 12 characters!"
    }

    if(input.confirmPassword === ""){
      errorMsg.confirmPassword = "Please enter confirm password"
    }else if(input.confirmPassword !== input.password){
      errorMsg.confirmPassword = "Your password hasn't matched!"
    }

    return errorMsg;
  }

  return (
    <div className="wrapper">
      <div className="form">
        {Object.keys(errors).length === 0 && isSubmit ? 
        (<p className="successfulMsg">Submitted successfully!</p>) 
        : 
        (<form onSubmit={handleSubmit}>
          <h2 className="title">Register Form</h2>
          <div className="field">
            <label>Username</label>
            <input 
              type="text" 
              name="username"
              value={values.username} 
              placeholder="Username"
              onChange={handleChange} 
            />
          </div>
          <p className="errorMsg">{errors.username}</p>
          <div className="field">
            <label>Email</label>
            <input 
              type="email" 
              name="email"
              value={values.email} 
              placeholder="Email"
              onChange={handleChange} 
            />
          </div>
          <p className="errorMsg">{errors.email}</p>
          <div className="field">
            <label>Password</label>
            <input 
              type="password" 
              name="password"
              value={values.password} 
              placeholder="Password"
              onChange={handleChange} 
            />
          </div>
          <p className="errorMsg">{errors.password}</p>
          <div className="field">
            <label>Confirm password</label>
            <input 
              type="password" 
              name="confirmPassword"
              value={values.confirmPassword} 
              placeholder="Confirm Password"
              onChange={handleChange} 
            />
          </div>
          <p className="errorMsg">{errors.confirmPassword}</p>
          <button className='btn'>Submit</button>
        </form>
        )}
      </div>
    </div>
  );
}

export default App;
