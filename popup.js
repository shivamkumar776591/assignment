// const { response } = require("express");
document.getElementById("addDomain").onclick=()=>{
 
  const domain = window.location.hostname;
  console.log(domain);


  console.log("Button clicked");
  const apiUrl = `http://localhost:5000/${domain}`;
  console.log("API URL:", apiUrl);
  
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log("Data received:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  
}
