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

    static #getUsers(data, isAll, fields) {
        const users = JSON.parse(data);
        if(isAll) return users;
        // const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        
        return newUsers;
    }

    static getUsers(isAll, ...fields) {
        return fs
            .readFile('./src/databases/users.json')
            .then((data) => {
               return this.#getUsers(data, isAll, fields);
            })
            .catch(console.error);

        
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

    

    static async save(userInfo) {
        const users = await this.getUsers(true);
        if(users.id.includes(userInfo.id)) {
            throw "이미 존재하는 아이디입니다.";
        }
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.password.push(userInfo.password);
        console.log(users);
        //데이터 추가
        fs.writeFile('./src/databases/users.json', JSON.stringify(users));
        return {success:true};
    }
}

module.exports = UserStorage;