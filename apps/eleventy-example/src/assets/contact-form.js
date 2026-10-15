// Submits the contact form to StaticForms with fetch and toggles the
// loading / success / error states. The API key is read from the form's
// `data-api-key` attribute, which is filled in at build time.
const form = document.querySelector("#contact-form");
const submitButton = document.querySelector("#submit-button");
const errorBox = document.querySelector("#error-message");
const successBox = document.querySelector("#success-message");
const resetButton = document.querySelector("#reset-button");

function setLoading(loading) {
  for (const field of form.querySelectorAll("input, textarea")) {
    field.disabled = loading;
  }
  submitButton.disabled = loading;
  submitButton.innerHTML = loading
    ? '<span class="spinner"></span>Sending...'
    : "Send Message";
}

function showError(message) {
  errorBox.textContent = message;
  errorBox.hidden = false;
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  errorBox.hidden = true;

  // Read values before disabling the fields (disabled fields are excluded from FormData)
  const formData = new FormData(form);
  setLoading(true);

  const data = {
    apiKey: form.dataset.apiKey,
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
    replyTo: "@", // Uses sender's email as reply-to
    subject: "New Contact Form Submission",
  };

  try {
    const response = await fetch("https://api.staticforms.dev/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (result.success) {
      form.reset();
      form.hidden = true;
      successBox.hidden = false;
    } else {
      showError(result.message || "Something went wrong");
    }
  } catch {
    showError("Failed to send message. Please try again.");
  } finally {
    setLoading(false);
  }
});

resetButton.addEventListener("click", () => {
  successBox.hidden = true;
  form.hidden = false;
});
