document.getElementById('solveBtn').addEventListener('click', function() {
  const url = document.getElementById('captchaUrl').value;
  const imgElement = document.getElementById('captchaImage');
  const solvedTextElement = document.getElementById('solvedText');
  if (url) {
    imgElement.src = url;
    imgElement.style.display = 'block';
    // Simulate solved captcha text (Replace with OCR implementation)
    solvedTextElement.textContent = 'Sample Solved Text';
  } else {
    alert('Please enter a valid URL.');
  }
});