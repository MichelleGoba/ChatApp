const userModel = require("../Models/userModel")
const bcrypt = require("bcrypt");
const validator = require("validator");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
    const jwtkey = process.env.JWT_SECRET_KEY;

    return jwt.sign({_id}, jwtkey, {expiresIn: "3d"});

};

const registerUser = async (req, res) => {
    try{
        const { name, username, email, password, confirmPassword, } = req.body

    // check if a user already exist in the database
    let user = await userModel.findOne({email});

    // send error message
    if(user) return res.status(400).json("User with given email already exist...");

    // validation
    if(!name || !username || !email || !password || !confirmPassword) return res.status(400).json("All fields are required!");

    // check if email is valid and i password is strong
    if(!validator.isEmail(email)) return res.status(400).json("email must be a valid email!");
    if(!validator.isStrongPassword(password)) return res.status(400).json("Password must be a stong password!");


    // create user
    user = new userModel({name, email, password})

    // hide/hash password
    const salt = await bcrypt.genSalt(10)
    user.password = await bcrypt.hash(user.password, salt)

    // save user in the database
    await user.save()

    const token = createToken(user._id)

    // send data to client
    res.status(200).json({ _id: user._id, name, email, token })
    }catch(error){
        console.log(error);
        res.status(500).json(error);
    }
    
};

// login a user
const loginUser = async(req, res) =>{
    const {email, password} = req.body;

// find the user from the database
try{
    let user = await userModel.findOne({ email});

    // check if the user exist
    if(!user) return res.status(400).json("Invalid email or password")
    
    // compare password given by user and password in the database
    const isValidPassword = await bcrypt.compare(password, user.password)
    if(!isValidPassword) return res.status(400).json("Invalid email or password!")

    // if the password is corect, send these details
    const token = createToken(user._id);
    res.status(200).json({ _id: user._id, name: uder.name, email, token})

}catch(error){
    console.log(error);
    res.status(500).json(error);
}
};

// to find one user
const findUser = async (req, res) => {
    const userId = req.params.userId;
    try{
        const user = await userModel.findById(userId);

        res.status(200).json("user");
    }catch(error){
        console.log(error);
    res.status(500).json(error);
    }
};

// find all users
const getUsers = async (req, res) => {
    try{
        const users = await userModel.find();

        res.status(200).json("users");
    }catch(error){
        console.log(error);
    res.status(500).json(error);
    }
};
module.exports = { registerUser, loginUser, findUser, getUsers } ;