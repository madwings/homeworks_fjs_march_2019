const loadScreen = document.querySelector('.load-screen');
const mainPage = document.querySelector('.main');
const expand = document.querySelectorAll('.expand-list');
const innerItems = document.querySelectorAll('.inner-list li');

const dropMenu = document.querySelectorAll('.nav-link');
dropMenu.clear = function() {
    this.forEach(i => i.classList.remove('active'));
};

// Run CSS Animation "Page Loading"
setTimeout(() => {
    loadScreen.style.opacity = 0;
    loadScreen.style.display = 'none';
    mainPage.style.display = 'block';
    setTimeout(() => (mainPage.style.opacity = 1), 50);
}, 3000);

// Navigation Menu
document.body.addEventListener('click', function(e) {
    switch (true) {
        case e.target.classList.contains('nav-link'):
            dropMenu.clear();
            e.target.classList.toggle('active');
            break;
        default:
            dropMenu.clear();
    }
});

const form = {
    register: document.getElementById('register'),
    name: document.getElementById('name'),
    username: document.getElementById('user'),
    email: document.getElementById('email'),
    password: document.getElementById('password'),
    passwordCheck: document.getElementById('repPassword')
};

const errorMsg = {
    name: document.getElementById('sp-name'),
    user: document.getElementById('sp-user'),
    email: document.getElementById('sp-mail'),
    password: document.getElementById('sp-password'),
    passwordCheck: document.getElementById('sp-checkPass')
};

const valEmail = /^[a-z0-9._%-]+@[a-z0.9.-]+\.[a-z]{2,4}$/;
const valPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

const formContainer = document.querySelector('.reg-form');
const submisionMsg = document.querySelector('.reg-form-success');

form.username.addEventListener(
    'keypress',
    noSpace => {
        if (noSpace.charCode == 32) {
            noSpace.preventDefault();
        }
    },
    false
);

// On Form Submit
form.register.addEventListener('submit', formCheck);

function formCheck(e) {
    if (form.name.value == '') {
        errorMsg.name.innerText = 'Please, enter Name';
    }
    if (form.username.value == '') {
        errorMsg.user.innerText = 'Please, enter UserName';
    }
    if (!valEmail.test(form.email.value)) {
        errorMsg.email.innerText = 'Not Valid Email Address!';
    }

    if (!valPassword.test(form.password.value)) {
        errorMsg.password.innerText = 'Password must be 8 Characters';
    }

    if (form.password.value == '' || form.password.value != form.passwordCheck.value) {
        errorMsg.passwordCheck.innerText = 'Passwords do not match!';
    } else {
        formContainer.classList.add('success');
        submisionMsg.classList.add('done');
        setTimeout(() => {
            formContainer.classList.remove('success');
            submisionMsg.classList.remove('done');
        }, 2000);
    }
    e.preventDefault;
}
