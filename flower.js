// Function to remove "not-loaded" class after 1 second
const removeLoadingClass = () => {
  const timeoutId = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(timeoutId);
  }, 1000);
};

// Function to redirect to "3d-rot.html" after 9 seconds
const redirectAfterDelay = () => {
  setTimeout(() => {
    window.location.href = "3d-rot.html"; // Redirect to 3d-rot.html
  }, 9000); // 9000 milliseconds = 9 seconds
};

// Call both functions when the window has fully loaded
window.onload = () => {
  removeLoadingClass();
  redirectAfterDelay();
};