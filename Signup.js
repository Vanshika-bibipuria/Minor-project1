import "../common/Signup.css";
import { useNavigate } from "react-router-dom";
//alert
  export const Signup =()=>{

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("yay!!You have signup successfull:)")
        navigate('/login');
      };
  return (
        <div className="main">
      <h2>Signup Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="first">First Name:</label>
          <input type="text" id="first" name="first"  />
        </div>
        <div className="form-group">
          <label htmlFor="last">Last Name:</label>
          <input type="text" id="last" name="last"  />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email"  />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password"  />
        </div>
      
        
        
        <button type="submit">Submit</button>
      </form>
    </div>
  
    )
}