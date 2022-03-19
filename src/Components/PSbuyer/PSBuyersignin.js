import React from 'react'
import { useContext,useState } from 'react';
import { useNavigate,Link } from "react-router-dom";
import noteContext from '../../context/notes/notecontext';




export default function Login() {

    const navigate = useNavigate()

    const boom =useContext(noteContext)
    const {host}=boom

    const [credentials, setcredentials] = useState({email:"",password:""})
    
    const signin=async (a)=>{
        try{
        
        a.preventDefault();
        const response = await fetch(`${host}/api/psbuyer/loginuser`, {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          // mode: 'cors', // cors, *no-cors, same-origin
          // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          // credentials: 'same-origin', // include, *same-origin, omit
          headers: {
            'Content-Type': 'application/json',
           
          },
          // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
         // body data type must match "Content-Type" header
         body: JSON.stringify({"email":credentials.email,"password":credentials.password})
        });

        // console.log(response)
        // console.log("sending request")
        let res=await response.json(); // parses JSON response into native JavaScript objects
        // console.log("respose reached")
        if(res.success){
            localStorage.setItem("authtoken",res.authtoken);
            localStorage.setItem("company",res.company);
            navigate("/psbuyerhome")

        }else{
            alert("Enter valid details")
        }
      }catch(error){
        console.log(error)
        document.getElementById("signin_error").innerHTML=error
      }
    }


      const handleonchange=(e)=>{
          setcredentials({...credentials,[e.target.name]:e.target.value})
      }


    return (
        <>
        {/* <div>
           <form>
  <div className="form-group">
    <label htmlFor="email">Email address</label>
    <input type="email" name="email" className="form-control"  id="exampleInputEmail1" onChange={handleonchange} aria-describedby="emailHelp" placeholder="Enter email"/>
   
  </div>
  <div className="form-group">
    <label htmlFor="email">Password</label>
    <input type="password" name='password' className="form-control" id="email" onChange={handleonchange} placeholder="Password"/>
  </div>

  <button type="submit" onClick={signin} className="btn btn-primary my-3">Submit</button>
</form>
        </div> */}
        <p id='signin_error'>

        </p>












        

<script src="https://use.fontawesome.com/1dec14be15.js"></script>
    <div className="container-fluid stylish-form" style={{"height":"100%"}}>  
      <h2 className="text-center">Traders,Buyers and Commodity Exchanges</h2>
      <div className="row mar20" >
        <div className="col-md-12 col-sm-12 col-xs-12">
          <div className="inner-section">
            <form method="POST">
              <div className="mar20 inside-form">
                <h2 className="font_white text-center">SIGN IN</h2>
                  {/* <ul>
                    <li className="icon-holder dsp-flex">
                      <i className="fa fa-facebook "></i>
                    </li>
                    <li className="icon-holder dsp-flex">
                      <i className="fa fa-twitter "></i>
                    </li>
                    <li className="icon-holder dsp-flex">
                      <i className="fa fa-instagram "></i>
                    </li>
                  </ul> */}
               <p className='text-light'>E-Mail       </p>
                <div className="input-group">
                  <span className="input-group-addon"><i className="fa fa-envelope "></i></span>
                  
                  <input type="tel" className="form-control" name="email" placeholder="Email..." onChange={handleonchange}/>
                </div>
                <p className='text-light'>Password</p>
                <div className="input-group">
                  <span className="input-group-addon"><i className="fa fa-lock "></i></span>
                  <input type="password" className="form-control" name="password" placeholder="Password..." onChange={handleonchange}/>
                </div>
                <div className="footer text-center">
                  <a onClick={signin} className="btn btn-neutral btn-round btn-lg">Login</a>
                </div>
                <p className='text-light'   ><Link className='text-light' to="/psbuyersignup">Dont have an account ? Signup</Link>  </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <a href="fb.com/ervijender"><h2 className="text-center font_white">Farmers are Backbone to India</h2></a> */}
      <br>
      </br>
      <br>
      </br>
      <br></br>
      <br>
      </br>
    </div>
        </>
    )
}
