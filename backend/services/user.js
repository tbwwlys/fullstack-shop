const mysql = require('mysql'); //引入安装的mysql插件
// const config = require('../config/mysql.default')
const { DATABASE_HOST, 
        DATABASE_USERNAME, 
        DATABASE_PASSWORD, 
        DATABASE_DATABASE, 
        DATABASE_PORT } = require('../config/mysql.default'); //引入抛出的mysql配置
// const pool = mysql.createPool({
//     host: config.database.HOST,
//     user: config.database.USERNAME,
//     password: config.database.PASSWORD,
//     database: config.database.DATABASE,
//     port: config.database.PORT
// })
// 创建线程池 把配置给到线程池去登录我的mysql软件
const pool = mysql.createPool({
  host: DATABASE_HOST,
  user: DATABASE_USERNAME,
  password: DATABASE_PASSWORD,
  database: DATABASE_DATABASE,
  port: DATABASE_PORT
})

//连接数据库，执行sql语句
const allService = {
    query: function (sql, values) {
        return new Promise((resolve, reject) => {
            // console.log('未连接数据库', config)
            pool.getConnection((err, connection) => { //连接数据库
                if (err) { //连接失败
                    reject(err);
                }
                else {  //连接成功
                    // console.log(sql, values, '///////////////////')
                    connection.query(sql, values, (err, rows) => { //执行sql语句
                        // console.log('连接成功');
                        console.log(err, rows, '//////////////////////')
                        if (err) {//sql语句执行失败
                            reject(err);
                        }
                        else {  //sql语句执行成功
                            resolve(rows)
                        }
                        connection.release() //断开连接
                    })
                }
            })
        })
    }
}

//登录
const userLogin = (username, password) => {
    let _sql = `select * from users where username="${username}" and password="${password}";`
    return allService.query(_sql)
}

//查询用户账号是否存在
const findUser = (username) => {
    let _sql = `select * from users where username="${username}";`
    return allService.query(_sql)
}

//注册
const userRegister = (values) => {
    let _sql = `insert into users set username=?,password=?;`
    return allService.query(_sql, values)
}
//购物车查询
const cartFind = (id) => {
    let _sql = `select * from cart where id="${id}";`
    return allService.query(_sql);
}
// 
const cartAdd = (values) => {
    let _sql = 'insert into cart set id=?,username=?,name=?,price=?,max=?,min=?,shop=?,address=?,guarantee=?,imgUrl=?,num=min;'
    return allService.query(_sql, values);
}


const numAdd = (id) => {
    let _sql = `update cart set num=num+1 where id="${id}";`
    return allService.query(_sql)
}

const cartList = (username) => {
    let _sql = `select * from cart where username="${username}";`
    return allService.query(_sql)  
}

module.exports = {
    findUser,
    userRegister,
    userLogin,
    cartFind,
    cartAdd,
    numAdd,
    cartList
}