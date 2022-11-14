"use strict"

class UserStorage {
    //# : 변수를 private처럼
    static #users = {
        id: ['a', 'abc', 'ccc'],
        password: ['123', '1234', '12345'],
        name : ['aaa', 'bbb', 'ccc'],
    }

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        
        return newUsers;
    }

    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users); 
        const userInfo = usersKeys.reduce((newUsers, info) => {
            newUsers[info] = users[info][idx];
            return newUsers;
        }, {}); 

        return userInfo;
    }

    static save(userInfo) {
        const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.password.push(userInfo.password);
        return {success: true};
    }
}

module.exports = UserStorage;