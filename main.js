const radioButtons = document.querySelectorAll('.booking_radio');

radioButtons.forEach((button) => {
  button.addEventListener('change', () => {
    radioButtons.forEach((otherButton) => {
      if (otherButton !== button) {
        otherButton.checked = false;
      }
    });
  });
});