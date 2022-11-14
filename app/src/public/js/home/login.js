"use strict"

const id = document.querySelector('#id');
const password = document.querySelector('#password');
const loginBtn = document.querySelector('#button');

console.log(id, password, loginBtn);

loginBtn.addEventListener('click', login);

function login() {
    const req = {
        id: id.value,
        password: password.value,
    };

    console.log(req, JSON.stringify(req));
    
    fetch('/login', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req),
    })
    .then((res) => res.json())
    .then((res) => {
        if(res.success) {
            location.href = '/';
        }
        else {
            alert(res.msg);
        }
    }).catch((err) => {
        console.error(new Error("회원가입 중 에러 발생"));
    })
};