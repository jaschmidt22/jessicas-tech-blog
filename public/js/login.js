//function for login form submission
const loginFormHandler = async (event) => {
  event.preventDefault();

  //get values of the username and password input fields
  const username = document.querySelector("#username-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (username && password) {
    //send post request to login with the input values as JSON data
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/"); //if successful load the homepage
      console.log("Logged in successfully!");
    } else {
      alert("Failed to log in."); //in unsuccessful show alert
      console.log("Failed to log in.");
    }
  }
};

//even listener for login form submissions
const loginForm = document.querySelector(".login-form");
if (loginForm) {
  loginForm.addEventListener("submit", loginFormHandler);
}
