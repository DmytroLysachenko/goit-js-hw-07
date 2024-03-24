const loginForm = document.querySelector("form.login-form");
function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();
  if (email === "" || password === "") {
    return alert("All form fields must be filled in");
  }
  form.reset();
  console.log({ email, password });
}
loginForm.addEventListener("submit", handleSubmit);