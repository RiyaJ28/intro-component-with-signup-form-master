function sub() {
  let firstName = document.getElementById("f-name").value;
  alert(firstName);
  if (firstName === "") {
    firstName.classList.remove("right");
    firstName.classList.add("wrong");
    firstName.classList.remove("hidden");
    firstName.classList.add("warning");
  }
}
