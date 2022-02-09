import User from '../models/User'
import jwt  from 'jsonwebtoken'
import config from '../config/config'
import Role from '../models/Role'

export const signUp = async (req, res) => {
    const {username, email, password, roles} = req.body 

    const newUser = new User({
        username,
        email,
        password: await User.encryptPassword(password)
    })

    if(roles){
        const foundRoles = await Role.find({name: {$in: roles}})
        newUser.roles = foundRoles.map(role => role._id)
    }else {
        const role = await Role.findOne({name: 'user'})
        newUser.roles = [role._id]
    }

    const response = await newUser.save();
    console.log(response)

    const token = jwt.sign({id: response._id}, config.SECRET, {
        expiresIn: 3600 // 1 hora 
    })

    res.status(200).json({token})
}

export const signIn = async (req, res) => {
    const {email, password} = req.body

    const userFound = await User.findOne({email}).populate("roles");

    if(!userFound) return res.status(400).json({message: "User not found"})

    const matchPassword = await User.comparePassword(password, userFound.password)

    if(!matchPassword) return res.status(401).json({token: null, message: "Invalid Password"})

    const token = jwt.sign({id: userFound._id}, config.SECRET, {
        expiresIn: 3600
    })

    res.json({token})
}