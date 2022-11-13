"use strict"

class UserStorage {
    //# : 변수를 private처럼
    static #users = {
        id: ['a', 'abc', 'aaaa'],
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
}

module.exports = UserStorage;