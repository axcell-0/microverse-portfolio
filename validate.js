const form = document.getElementById('contactForm');
const emailInput = form.querySelector('#email');
const errorMessage = form.querySelector('#error-message');

form.addEventListener('submit', (event) => {
  if (emailInput.value !== emailInput.value.toLowerCase()) {
    event.preventDefault();
    errorMessage.textContent = 'Please enter a lowercase email address.';
  }
});

form.addEventListener('input', () => {
  const formData = Object.fromEntries(new FormData(form).entries());
  localStorage.setItem('UserData', JSON.stringify(formData));
});

const savedFormData = JSON.parse(localStorage.getItem('UserData'));
if (savedFormData) {
  Object.entries(savedFormData).forEach(([name, value]) => {
    const input = form.elements[name];
    if (input) {
      input.value = value;
    }
  });
}