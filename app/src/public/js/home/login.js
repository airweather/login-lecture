"use strict"

const id = document.querySelector('#id');
const password = document.querySelector('#password');
const loginBtn = document.querySelector('#button');

console.log(id, password, loginBtn);

loginBtn.addEventListener('click', login);

function login() {
    if(!id.value) return alert('아이디를 입력해주세요.')
    if(!password.value) {
        return alert('비밀번호를 입력하세요.')
    };

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
            if(res.err) return alert(res.err);
            alert(res.msg);
        }
    }).catch((err) => {
        console.error(new Error("로그인 중 에러 발생"));
    })
};