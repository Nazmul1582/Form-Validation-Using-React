import './App.css';

function App() {
  return (
    <div className="wrapper">
      <div className="form">
        <form>
          <h2 className="title">Register Form</h2>
          <div className="field">
            <label>Username</label>
            <input 
              type="text" 
              name="username"
              placeholder="Username"
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input 
              type="email" 
              name="email"
              placeholder="Email"
            />
          </div>
          <div className="field">
            <label>Password</label>
            <input 
              type="password" 
              name="password"
              placeholder="Password"
            />
          </div>
          <div className="field">
            <label>Confirm password</label>
            <input 
              type="password" 
              name="confirmPassword"
              placeholder="Confirm Password"
            />
          </div>
          <button className='btn'>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
