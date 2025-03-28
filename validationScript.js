document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("inputField");
  const form = document.getElementById("myForm");
  
  form.addEventListener("submit", (e) => {
      if (!/^[a-zA-Z0-9]+$/.test(input.value.trim())) {
          e.preventDefault();
          input.setCustomValidity("Alphanumeric only");
          input.reportValidity();
          console.log("Invalid input: Form not submitted");
      } else {
          input.setCustomValidity("");
          alert("Submission confirmed");
      }
  });
});
