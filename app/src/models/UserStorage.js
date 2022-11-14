"use strict"

const fs = require('fs').promises;

class UserStorage {
    //# : 변수를 private처럼
    static #getUserInfo(data, id) {
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users); 
        const userInfo = usersKeys.reduce((newUsers, info) => {
            newUsers[info] = users[info][idx];
            return newUsers;
        }, {}); 

    return userInfo;
    }

    static getUsers(...fields) {
        // const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        
        return newUsers;
    }

    static getUserInfo(id) {
        // const users = this.#users;
        //promise일 때 .then()은 성공시 실행 .catch는 실패 시
        return fs
            .readFile('./src/databases/users.json')
            .then((data) => {
               return this.#getUserInfo(data, id);
            })
            //err => console.error(err)이지만 파라미터로 넘어온 것을
            //함수에서 다시 실행하면 생략할 수 있음
            //즉 (err) => console.error(err)
            .catch(console.error);

    }

    

    static save(userInfo) {
        // const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.password.push(userInfo.password);
        return {success: true};
    }
}

module.exports = UserStorage;