// ambik value dari html input
const form = document.getElementById('ageForm');
const nameInput = document.getElementById('name');
const yobInput = document.getElementById('year_of_birth');

const popup = document.getElementById('popup');
const popupMessage = document.getElementById('popupMessage');
const closePopup = document.getElementById('closePopup');

//function to display the popup message
function showPopup(message, type) {
    popupMessage.textContent = message;
    popup.style.display = 'block';

    if (type === 'success') {
        closePopup.style.backgroundColor = 'green';
    } else if (type === 'error') {
        closePopup.style.backgroundColor = 'red';
    } else {
        closePopup.style.backgroundColor = ''; // default
    }
}
//close message animation
closePopup.addEventListener('click', function() {
    popup.style.display = 'none';
});

form.addEventListener('submit', function(event) {
    event.preventDefault(); // prevent form submission

    //set the value from input
    const currentYear = new Date().getFullYear();
    const name = nameInput.value;
    const yob = Number(yobInput.value);
    const age = currentYear - yob;

    //This checks if age is not a number.
    if (isNaN(age) || yob <= 0) {
        showPopup("Please enter a valid year of birth!", 'error');
        return;
    }

    if (age >= 18) {
        showPopup(`Welcome to the website, ${name}!`, 'success');
    } else {
        showPopup(`Sorry,${name}, you are under age, you not allowed here.`, 'error');
    }
});