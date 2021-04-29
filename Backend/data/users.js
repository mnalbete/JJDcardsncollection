import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin:true
    },
    {
        name: 'john doe',
        email: 'john@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'jane doe',
        email: 'jane@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users