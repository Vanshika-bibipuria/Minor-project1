import { useNavigate } from "react-router-dom";
import React from "react";
import '../common/Login.css';
 
//alert

export const Login =()=>{
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();//This line stops the default form submission behavior
        navigate('/dashboard');
        alert("Login form submitted successfully!");
      };

return(
    <>
    
    <form onSubmit={handleSubmit}>
        {/* Ye ek event handler attribute hai. Jab form submit hoga, tab handleSubmit naam ka JavaScript function call hoga. */}
       
       <div className="form-group"> 
        <label type="email">Email</label>
        <input type="email" id="email" name="email" required />
        </div>

        <div>
            <label type="password">Password</label>
            <input type="password"id="password" name="password" required/>
        </div>
          <br></br>
        <button type="submit">Login</button>

    </form>

    <div>
        <p>Kya aapka account nhi h ?<Link to="/signup">Yahan bnaiye</Link></p>
    </div>

    </>
);
}