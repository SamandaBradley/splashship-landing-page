
//set the current year auto
document.getElementById('year').textContent = new Date().getFullYear();

//handle the contact form
const form = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // Stop the form sub

  // grb th values from the inputs
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // validation
  if (!name || !email || !message) {
    formMsg.classList.remove('d-none', 'text-success');
    formMsg.classList.add('text-danger');
    formMsg.textContent = 'Please fill out all fields.';
    return;
  }

  formMsg.classList.remove('d-none', 'text-danger');
  formMsg.classList.add('text-success');
  formMsg.textContent = 'Thanks! Your message has been sent.';

  // Clear the form fields
  form.reset();
});
