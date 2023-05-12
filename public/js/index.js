/*eslint-disable*/

import '@babel/polyfill';
import { login, logout } from './login';
import { updateData } from './updateSettings';

//DOM ELEMENTS
const loginForm = document.querySelector('.form--login');
const userDataForm = document.querySelector('.form-user-data');
const logOutBtn = document.querySelector('.nav__el--logout');

//DELEGATION
if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    login(email, password);
  });
}

if(logOutBtn) {
  logOutBtn.addEventListener('click', logout);
}

if (userDataForm) {
  userDataForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    updateData(name, email);
  });
}