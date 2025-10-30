const form = document.querySelector(".mainForm");
const input = document.querySelector("#inputBox");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // stop form from reloading page

  const email = input.value.trim();
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // basic email pattern

  if (regex.test(email)) {
    alert("✅ Valid Email Address!");
  } else {
    alert("❌ Invalid Email. Please enter a correct one.");
  }
});

// optional: live border color feedback while typing
input.addEventListener("input", () => {
  input.style.borderColor = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)
    ? "green"
    : "red";
});
