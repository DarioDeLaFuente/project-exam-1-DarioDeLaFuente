function validate(event) {
  event.preventDefault();
  let passed = true;
  let name = document.forms["contactForm"]["name"].value;
  let subject = document.forms["contactForm"]["subject"].value;
  let email = document.forms["contactForm"]["email"].value;
  let message = document.forms["contactForm"]["message"].value;

  const formpassed = document.querySelector(".form-container");

  if (name.trim() == "") {
    document.querySelectorAll("#name + .validate-message")[0].innerHTML =
      displayFormError("A name is required");
    passed = false;
  } else {
    document.querySelectorAll("#name + .validate-message")[0].innerHTML = "";
  }
  if (subject.trim().length <= 10) {
    document.querySelectorAll("#subject + .validate-message")[0].innerHTML = displayFormError(
      "* Must have a value with a minimum length of 10"
    );
    passed = false;
  } else {
    document.querySelectorAll("#subject + .validate-message")[0].innerHTML = "";
  }
  if (validateEmail(email.trim()) == "") {
    document.querySelectorAll("#email + .validate-message")[0].innerHTML = displayFormError(
      "* Must have a value email"
    );
    passed = false;
  } else {
    document.querySelectorAll("#email + .validate-message")[0].innerHTML = "";
  }
  if (message.trim().length <= 25) {
    document.querySelectorAll("#message + .validate-message")[0].innerHTML = displayFormError(
      "* Must have a value with a minimum length of 25"
    );
    passed = false;
  } else {
    document.querySelectorAll("#message + .validate-message")[0].innerHTML = "";
  }
  if (passed) {
    document.querySelector("[name='contactForm']").style.display = "none";
    formpassed.innerHTML = displayFormSuccess("THANK YOU FOR YOUR SUBSCRIPTION!");
  }
}

function displayFormSuccess(formSuccessMessage = "SuccessMessage") {
  return `<div class="form-success"><div class="success-message-text form-passed">${formSuccessMessage}</div><div class="success-message-conteiner"></div></div>`;
}
function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
