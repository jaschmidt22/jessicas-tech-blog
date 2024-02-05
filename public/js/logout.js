//function to send request to log out the user
const userLogout = async () => {
  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/"); //if successful load the homepage
  } else {
    alert("Failed to log out."); //if unsuccessful show alert
  }
};
//event listener for the logout button
const userLogoutButton = document.querySelector("#logout");
if (userLogoutButton) {
  userLogoutButton.addEventListener("click", userLogout);
}
