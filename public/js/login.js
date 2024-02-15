//function for login form submission
const loginFormHandler = async (event) => {
  event.preventDefault();
  //get values of the username and password input fields
  const name = document.querySelector("#name-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (username && password) {
    //send post request to login with the input values as JSON data
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ name, password }),
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
//function for signup form submission
const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#name-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (name && email && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
      console.log("Signed up successfully!");
    } else {
      alert(response.statusText);
      console.log("Failed to sign up.");
    }
  }
};

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
