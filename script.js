document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const submitBtn = document.getElementById("submitBtn");
  const submitText = document.getElementById("submitText");
  const submitSpinner = document.getElementById("submitSpinner");
  const successAlert = document.getElementById("formSuccess");
  const toastElement = document.getElementById("mainToast");
  const toastMsg = document.getElementById("toastMsg");

  if (!form || !submitBtn || !submitText || !submitSpinner || !successAlert) {
    return;
  }

  let isSubmitting = false;
  const bootstrapToast =
    toastElement && window.bootstrap ? bootstrap.Toast.getOrCreateInstance(toastElement) : null;

  const setSubmittingState = (submitting) => {
    isSubmitting = submitting;
    submitBtn.disabled = submitting;
    submitText.classList.toggle("d-none", submitting);
    submitSpinner.classList.toggle("d-none", !submitting);
  };

  const showToast = (message) => {
    if (!bootstrapToast || !toastMsg) {
      return;
    }

    toastMsg.textContent = message;
    bootstrapToast.show();
  };

  const showSuccess = () => {
    successAlert.classList.remove("d-none");
    showToast("Mensaje enviado correctamente.");
  };

  const hideSuccess = () => {
    successAlert.classList.add("d-none");
  };

  Array.from(form.elements).forEach((field) => {
    if (!(field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement)) {
      return;
    }

    field.addEventListener("input", () => {
      if (field.classList.contains("is-invalid") && field.checkValidity()) {
        field.classList.remove("is-invalid");
      }

      if (!successAlert.classList.contains("d-none")) {
        hideSuccess();
      }
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    hideSuccess();

    if (!form.checkValidity()) {
      event.stopPropagation();
      form.classList.add("was-validated");
      showToast("Revisa los campos obligatorios antes de enviar.");
      return;
    }

    form.classList.add("was-validated");
    setSubmittingState(true);

    window.setTimeout(() => {
      form.reset();
      form.classList.remove("was-validated");
      setSubmittingState(false);
      showSuccess();
    }, 1200);
  });
});
