"use strict"

const db = require('../config/db');

class UserStorage {
    //# : 변수를 private처럼
    
    static getUserInfo(id) {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM users WHERE id = ?;";
            db.query(query, [id] , (err, data) => {
                if (err) reject(`${err}`);
                else resolve(data[0]);
            })
        })
    }
    // static getUserInfo(id) {
    //     // const users = this.#users;
    //     //promise일 때 .then()은 성공시 실행 .catch는 실패 시
    //     return fs
    //         .readFile('./src/databases/users.json')
    //         .then((data) => {
    //            return this.#getUserInfo(data, id);
    //         })
    //         //err => console.error(err)이지만 파라미터로 넘어온 것을
    //         //함수에서 다시 실행하면 생략할 수 있음
    //         //즉 (err) => console.error(err)
    //         .catch(console.error);

    // }

    

    static async save(userInfo) {
        return new Promise((resolve, reject) => {
            const query = "INSERT INTO users(id, name, password) VALUES(?, ?, ?);";
            db.query(
                query,
                [userInfo.id, userInfo.name, userInfo.password],
                (err) => {
                    //err는 object이므로 object가 출력되지 않게 변수로...
                if (err) reject(`${err}`);
                else resolve({success:true});
            })
        })
    }
}

module.exports = UserStorage;