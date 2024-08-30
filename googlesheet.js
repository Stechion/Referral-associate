const scriptURL = 'https://script.google.com/macros/s/AKfycbymXZ_BBO9SokblOJUd-Dwt3Yc5r0PU0TI0JxZC_df4_ukmJCzYw9D6i9xb4P1AhcAG/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})