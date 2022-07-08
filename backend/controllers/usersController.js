import User from '../models/userModels.js'
import expressAsyncHandler from 'express-async-handler'
import genrateToken from '../utils/genrateToken.js'
 
// @desc Auth user & get token
// @route POST /api/users/login
// @access Public

const authUser = expressAsyncHandler( async (req, res) => {
    const {email, password} = req.body

    const user = await User.findOne({email})

    if(user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: genrateToken(user._id)
        })
    } else {
        res.status(401)
        throw new Error('Invalid email or password')
    }
})

// @desc Register
// @route POST /api/users
// @access Public

const registerUser = expressAsyncHandler( async (req, res) => {
    const {name, email, password} = req.body

    const userExist = await User.findOne({email})

    if(userExist) {
        res.status(400)
        throw new Error('User is already exist')
    }

    const user = await User.create({
        name,
        email,
        password
    })

    if(user) {
        res.status(201)
        res.json({
             _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: genrateToken(user._id)
        })
    } else {
        res.status(400)

        throw new Error('Invalid user data')
    }
})


// @desc Get user profile
// @route GET /api/users/profile
// @access Private

const getUserProfile = expressAsyncHandler( async (req, res) => {
    const user = await User.findById(req.user._id)

    if(user) {
        res.json({
             _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        })

    } else {
        res.status(401)
        throw new Error('User not found')
    }
})


// @desc Update user profile
// @route PUT /api/users/profile
// @access Private

const updateUserProfile = expressAsyncHandler( async (req, res) => {
    const user = await User.findById(req.user._id)

    if(user) {
        user.name = req.body.name || user.name
        user.email = req.body.email || user.email
        if(req.body.password) {
            user.password = req.user.password
        }

        const updatedUser = await user.save()

        res.json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin,
            token: genrateToken(user._id)
        })
    } else {
        res.status(401)
        throw new Error('User not found')
    }
})

export { authUser, getUserProfile, registerUser, updateUserProfile } 