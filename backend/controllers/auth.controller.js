import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup= async(req,res)=>{
    try{
        const {fullName,userName,password,confirmPassword,gender}=req.body;

        if(password !== confirmPassword){
            return res.status(400).json({error:"Passwords do not match"});
        }

        const user= await User.findOne({userName});
        if(user){
            return res.status(400).json({error:`User with ${userName} username already exists`});
        }
        // Hash the password
        const salt=await bcrypt.genSalt(10);
        const hashedPassword= await bcrypt.hash(password,salt);

        // profile pic --> https://avatar-placeholder.iran.liara.run/
        const boyProfilePic=`https://avatar.iran.liara.run/public/boy?username=${userName}`
        const girlProfilePic=`https://avatar.iran.liara.run/public/girl?username=${userName}`

        const newUser=new User({
            fullName:fullName,
            userName:userName,
            password:hashedPassword,
            gender:gender,
            profilePic:gender==="male"?boyProfilePic:girlProfilePic,
        })

        if(newUser){
            //generate JWT Token
            generateTokenAndSetCookie(newUser._id,res);
            await newUser.save();
            res.status(201).json({
                _id: newUser._id,
                fullName:newUser.fullName,
                userName:newUser.userName,
                profilePic:newUser.profilePic,
            })
        }
        else{
            res.status(400).json({error:"Invalid User data"});
        }
    }
    catch(error){
        console.log("Error in signup",error.message)
        res.status(500).json({error:"Internal Server Error"});
    }
}

export const login=async (req,res)=>{
    try {
        const {userName,password}=req.body;
        const user= await User.findOne({userName});

        if(!user){
            return res.status(400).json({error:`No user with ${userName} username exists`});
        }

        const isComparePassword = await bcrypt.compare(password,user.password);
        if(!isComparePassword){
            return res.status(400).json({error:`Invalid Password`});
        }

        generateTokenAndSetCookie(user._id,res);
        res.status(200).json({
            _id: user._id,
            fullName:user.fullName,
            userName:user.userName,
            profilePic:user.profilePic,
        })

    } catch (error) {
        console.log("Error in Login",error.message)
        res.status(500).json({error:"Internal Server Error"});
    }
}

export const logout= async (req,res)=>{
    try {
        res.cookie("jwt","",{maxAge:0});
        res.status(200).json({message: "Logged out successfully"});
    } catch (error) {
        console.log("Error in Logging out",error.message)
        res.status(500).json({error:"Internal Server Error"});
    }
}
