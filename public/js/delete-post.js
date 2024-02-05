//function to delete a post
const deletePost = async (post_id) => {
  const response = await fetch(`/api/posts/${post_id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.reload(); //successful reload the page
  } else {
    alert("Failed to delete the post.");
  }
};
//event handler for the delete button
const deletePostHandler = (event) => {
  if (event.target.matches(".delete-post")) {
    const post_id = event.target.getAttribute("data-post-id");
    deletePost(post_id);
  }
};
//event listener
document.addEventListener("click", deletePostHandler);
