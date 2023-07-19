const dotenv = require('dotenv')

dotenv.config()

const  DATABASE_HOST= process.env.DATABASE_HOST
const  DATABASE_USERNAME= process.env.DATABASE_USERNAME
const  DATABASE_PASSWORD= process.env.DATABASE_PASSWORD
const  DATABASE_DATABASE= process.env.DATABASE_DATABASE
const  DATABASE_PORT= process.env.DATABASE_PORT

module.exports = {
    DATABASE_HOST,
    DATABASE_USERNAME,
    DATABASE_PASSWORD,
    DATABASE_DATABASE,
    DATABASE_PORT
}


// const config = {
//     database: {
//         DATABASE: 'fullstack_shop',
//         USERNAME: 'root',
//         PASSWORD: '123456',
//         PORT: '3306',
//         HOST: 'localhost'
//     }
// }

// module.exports = config