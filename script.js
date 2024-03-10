document.getElementById('form').addEventListener('submit', function(event) {
    
    event.preventDefault();

    const firstNameInput = document.getElementById('first-name');
    const lastNameInput = document.getElementById('last-name');
    const pincodeInput = document.getElementById('pincode');
    const genderInput = document.querySelector('input[name="gender"]:checked');
    const addressInput = document.getElementById('address');
    const foodSelect = document.getElementById('food');

    if (!firstNameInput.value.trim()) {
        showValidationError(firstNameInput, 'Please enter your first name');
        return;
    }

    if (!lastNameInput.value.trim()) {
        showValidationError(lastNameInput, 'Please enter your last name');
        return;
    }

    if (!pincodeInput.value.trim()) {
        showValidationError(pincodeInput, 'Please enter your pincode');
        return;
    }

    if (!genderInput) {
        alert('Please select your gender');
        return;
    }

    if (!addressInput.value.trim()) {
        showValidationError(addressInput, 'Please enter your address');
        return;
    }
    const selectedFoods = foodSelect.selectedOptions;
    const numSelected = Array.from(selectedFoods).filter(option => option.selected).length;
    if (numSelected < 2) {
        alert('Please select at least two food options.');
        return;
    }

    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;
    const address = addressInput.value;
    const pincode = pincodeInput.value;
    const gender = genderInput.value;
    const selectedFoodOptions = Array.from(selectedFoods).map(option => option.value).join(', ');
    const state = document.getElementById('state').value;
    const country = document.getElementById('country').value; 
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${address}</td>
        <td>${pincode}</td>
        <td>${gender}</td>
        <td>${selectedFoodOptions}</td>
        <td>${state}</td>
        <td>${country}</td>
    `;

     document.querySelector('#dataTable tbody').appendChild(newRow);
     document.getElementById('form').reset();
});

function showValidationError(inputField, errorMessage) {
  
    inputField.setCustomValidity(errorMessage);
    inputField.reportValidity();
    
    setTimeout(function() {
        inputField.setCustomValidity('');
    }, 3000);
}
