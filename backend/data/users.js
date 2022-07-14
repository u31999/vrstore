import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'u31999@vrstore.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'john due',
        email: 'user1@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'jane doe',
        email: 'user2@example.com',
        password: bcrypt.hashSync('123456', 10),
    }
]

export default users;