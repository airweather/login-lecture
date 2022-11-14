"use strict"

const id = document.querySelector('#id');
const name = document.querySelector('#name');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');

const registerBtn = document.querySelector('#button');

console.log("hello register");

registerBtn.addEventListener('click', register);

function register() {
    if(!id.value) return alert('ID를 입력해주세요.')
    if(password.value !== confirmPassword.value) {
        return alert('비밀번호가 일치하지 않습니다.')
    }

    const req = {
        id: id.value,
        name: name.value,
        password: password.value,
       
    };

    console.log(req, JSON.stringify(req));
    
    fetch('/register', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req),
    })
    .then((res) => res.json())
    .then((res) => {
        if(res.success) {
            location.href = '/login';
        }
        else {
            alert(res.msg);
        }
    }).catch((err) => {
        console.error(new Error("로그인 중 에러 발생"));
    })
};