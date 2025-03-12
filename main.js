const nums = '1234567890';
const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const symbols = '!@#$%^&*(){}[];:?/';
const passwordLength = document.querySelector('#password-length');
const generateBtn = document.querySelector('#generate-btn');
const resetBtn = document.querySelector('#reset-btn');
const options = document.querySelectorAll('input[type="checkbox"]')
const displayGeneratedPassword = document.querySelector('#generated-password');

generateBtn.addEventListener('click', () => {
    if (selectPasswordChars() === '') {
        alert('Please select at least one option')
    }
    selectPasswordChars();

    if (passwordLength.value === '' || passwordLength.value === 0) {
        alert('Please enter a password length')
    }
    generatePassword()
})

resetBtn.addEventListener('click', () => {
    passwordLength.value = '';
    options.forEach(option => option.checked = false)
    displayGeneratedPassword.textContent = ''

})

function selectPasswordChars() {
    let userSelected = '';

    options.forEach(option => {
        if (option.checked) {
            if (option.value === 'numbers') {
                userSelected += nums;
            } else if (option.value === 'uppercase') {
                userSelected += uppercase;
            } else if (option.value === 'lowercase') {
                userSelected += lowercase;
            } else {
                userSelected += symbols;
            }
        }
    })

    return userSelected;
}

function generatePassword() {
    let passwordCharCount = passwordLength.value;
    let passwordOption = selectPasswordChars().split("");
    let finalPassword = '';

    for(let i = 0; i < passwordCharCount; i++) {
        finalPassword += passwordOption[Math.floor(Math.random() * passwordOption.length)];
    }

    displayGeneratedPassword.textContent = finalPassword
}