function showForm(formId) {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const loginTab = document.getElementById('loginTab');
    const signupTab = document.getElementById('signupTab');

    if (formId === 'loginForm') {
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
        loginTab.classList.add('active');
        signupTab.classList.remove('active');
    } else {
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
        loginTab.classList.remove('active');
        signupTab.classList.add('active');
    }
}

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let isValid = true;

    const username = document.getElementById('loginUsername');
    const password = document.getElementById('loginPassword');
    const usernameError = document.getElementById('loginUsernameError');
    const passwordError = document.getElementById('loginPasswordError');

    if (username.value.trim() === '') {
        usernameError.style.display = 'block';
        isValid = false;
    } else {
        usernameError.style.display = 'none';
    }

    if (password.value.trim() === '') {
        passwordError.style.display = 'block';
        isValid = false;
    } else {
        passwordError.style.display = 'none';
    }

    if (isValid) {
        // Redirect to the success page
        window.location.href = 'success.html';
    }
});

document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let isValid = true;

    const username = document.getElementById('signupUsername');
    const password = document.getElementById('signupPassword');
    const confirmPassword = document.getElementById('confirmPassword');
    const usernameError = document.getElementById('signupUsernameError');
    const passwordError = document.getElementById('signupPasswordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');

    if (username.value.trim() === '') {
        usernameError.style.display = 'block';
        isValid = false;
    } else {
        usernameError.style.display = 'none';
    }

    if (password.value.trim() === '') {
        passwordError.style.display = 'block';
        isValid = false;
    } else {
        passwordError.style.display = 'none';
    }

    if (confirmPassword.value.trim() === '' || confirmPassword.value !== password.value) {
        confirmPasswordError.style.display = 'block';
        isValid = false;
    } else {
        confirmPasswordError.style.display = 'none';
    }

    if (isValid) {
        alert('Account created successfully!');
        showForm('loginForm');
    }
});
