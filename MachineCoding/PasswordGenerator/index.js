const themeSwitcher = document.getElementById('darkModeToggle');
const showPassword = document.getElementById('showPasswordToggle');
const passwordRange = document.getElementById('passwordRange');
const copyButton = document.getElementById('copyBtn');
const upperClassCheckbox = document.getElementById('includeUppercase');
const numberCheckbox = document.getElementById('includeNumber');
const symbolCheckbox = document.getElementById('includesSymbol');
const passwordDisplay = document.getElementById('passwordDisplay');
const strengthDisplay = document.getElementById('strengthDisplay');
const generateButton = document.getElementById('generateButton');
const lengthValue = document.getElementById('lengthValue');

const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

// Theme toggle
themeSwitcher.addEventListener('change', () => {
  document.body.classList.toggle('dark', themeSwitcher.checked);
});

// Show password toggle
showPassword.addEventListener('change', () => {
  passwordDisplay.type = showPassword.checked ? 'text' : 'password';
});

// Update length value
passwordRange.addEventListener('input', (e) => {
  lengthValue.textContent = e.target.value;
});

// Generate password
generateButton.addEventListener('click', () => {
  let charset = lowercase;
  if (upperClassCheckbox.checked) charset += uppercase;
  if (numberCheckbox.checked) charset += numbers;
  if (symbolCheckbox.checked) charset += symbols;

  const length = parseInt(passwordRange.value);
  if (!charset) {
    alert('Please select at least one checkbox!');
    return;
  }

  let password = '';
  for (let i = 0; i < length; i++) {
    password += charset[Math.floor(Math.random() * charset.length)];
  }

  passwordDisplay.value = password;
  evaluateStrength(password);
});
// Copy to clipboard
copyButton.addEventListener('click', () => {
  passwordDisplay.select();
  document.execCommand('copy');
  copyButton.textContent = 'Copied!';
  setTimeout(() => (copyButton.textContent = 'Copy'), 1500);
});

// Strength checker
function evaluateStrength(password) {
  let score = 0;
  if (password.length >= 12) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/\d/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  const levels = ['Weak', 'Medium', 'Strong', 'Very Strong'];
  const colors = ['red', 'orange', 'green', 'lime'];

  const level = Math.min(score, levels.length - 1);
  strengthDisplay.textContent = levels[level];
  strengthDisplay.style.color = colors[level];
}
