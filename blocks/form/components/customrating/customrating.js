export default function decorate(fieldDiv, fieldJson) {
    fieldDiv.querySelectorAll('input').forEach(input => {
        input.type='button';
        input.name='';
    });
    const labels = fieldDiv.querySelectorAll('.radio-wrapper label');

// Remove each label from the DOM
labels.forEach(label => {
  label.remove();
});
const ratingInput = document.createElement('input');
ratingInput.type='hidden';
ratingInput.id = fieldDiv.name;
fieldDiv.appendChild(ratingInput);

const buttons = fieldDiv.querySelectorAll('.radio-wrapper input[type="button"]');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove 'active' class from all buttons
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // Add 'active' class to the clicked button
    button.classList.add('active');

    // Log or save the selected value
    const selectedValue = button.value;
    console.log('Selected Value:', selectedValue);

    // You can store the selected value in a hidden input for form submission if needed
    document.getElementById(fieldDiv.name).value = selectedValue;
  });
});


}