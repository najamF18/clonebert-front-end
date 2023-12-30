import {useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home(){
  const [message, setMessage] = useState('');
     useEffect(() => {
        if(localStorage.getItem('access_token') === null){                   
            window.location.href = '/'
        }
        else{
         (async () => {
          try {
            const { data } = await axios.get(
              'http://localhost:8000/home/',
              {
                headers: {
                  'Content-Type': 'application/json'
                }
              }
            );
              setMessage(data.message);
            }
          catch (e) {
          
            console.log('not auth')
          }
         })()};
     }, []);

     const handleLogout=(e)=>{
      axios.defaults.headers.common["Authorization"] = null;
      window.location.href = "/";
     }

     return(
      <div className="mt-5 text-center">
          <h1>Welcome!{message}</h1>
          <p className="text-center mb-4">
            <Link to="/logout" className="ms-2">Logout</Link>
          </p>
          
        </div>
     )

  
}
export default Home;