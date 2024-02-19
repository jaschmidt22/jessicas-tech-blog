//function for signup form submission
const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (username && email && password) {
    const response = await fetch("/api/users/signup", {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
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

//Event listener for signup form submissions
const signupForm = document.querySelector("#signup-form");
if (signupForm) {
  signupForm.addEventListener("submit", signupFormHandler);
}
