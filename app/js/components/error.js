function displayError(errorMessage = "Api unknown error") {
  return `<div class="error"><div class="error-info">${errorMessage}</div></div>`;
}
function displayFormError(formErrorMessage = "Form unknown error") {
  return `<div class="form-error"><div class="form-error-info">${formErrorMessage}</div></div>`;
}
