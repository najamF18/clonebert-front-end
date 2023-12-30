 import React, { useEffect } from "react";
 import axios from "axios";

function Logout() {

  async () => {
    try {
        // Make a request to your logout API endpoint
        await axios.post('http://localhost:8000/logout/', {
            // Include any necessary data for the logout request
        });

        // Clear the authentication token from local storage
        localStorage.removeItem('authToken');

        // Redirect the user to the login page or any other desired page
        window.location.href = '/';  // Update with your login page URL
    } catch (error) {
        // Handle any errors that occur during the logout process
        console.error('Logout failed:', error);
    }
};

return (
    <div></div>
);
 
}

export default Logout;
