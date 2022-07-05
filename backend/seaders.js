import mongoose from "mongoose"
import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/users.js'
import products from './data/products.js'
import User from './models/userModels.js'
import Order from './models/orderModels.js'
import connectDB from './config/db.js'
import Product from "./models/productsModels.js"

dotenv.config()

const importData = async () => {
    try {
        await connectDB()

        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        const createUsers = await User.insertMany(users)

        const adminUser = createUsers[0]._id

        const sampleProducts = products.map(product => {
            return { ...product, user: adminUser }
        })

        await Product.insertMany(sampleProducts)

        console.log('Data Imported!'.green.inverse)
        process.exit()
    } catch(error) {
        console.log(`${error}`.red.inverse)
        process.exit(1)
    }
}

const destoryData = async () => {
    try {
        await connectDB()

        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        console.log('Data Destroyed!'.red.inverse)
        process.exit()
    } catch(error) {
        console.log(`${error}`.red.inverse)
        process.exit(1)
    }
}

if(process.argv[2] === '-d') {
    destoryData()
} else {
    importData()
}
