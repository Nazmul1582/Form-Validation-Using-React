import { useState } from 'react';
import './App.css';

function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (event) => {
    const {name, value} = event.target;
    setValues({...values, [name] : value})
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values)
  }

  return (
    <div className="wrapper">
      <div className="form">
        <form onSubmit={handleSubmit}>
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
          <button className='btn'>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
