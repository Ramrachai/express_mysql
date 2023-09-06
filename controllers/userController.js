const { User } = require('../models/userModel');

// Create a user
exports.createUser = async (req, res) => {
    try {
        const { email } = req.body;

        // Check if the user already exists
        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({ message: 'User Already Exists' });
        }

        const newUser = new User(req.body);
        await newUser.save();

        return res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
        return res.status(500).json({ message: 'User creation failed', error: error.message });
    }
};

// Get all users
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json({ message: 'Error while fetching all users', error: error.message });
    }
};

// Update a user 

exports.updateUser = async (req, res) => {
    try {
        const userExist = await User.findOne({ _id: req.params.id })
        if (!userExist) {
            return res.status(404).json("User not found")
        }
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
        return res.status(201).json({ message: "user updated successfully", updatedUser })

    } catch (error) {
        return res.status(500).json({ message: "user update failed", error: error.message })
    }
}


exports.deleteUser = async (req, res) => {
    try {
        const id = req.params.id 
        console.log("id ==", id )
        let deletedUser = await User.findByIdAndDelete(id, {new:true})
        console.log("deleted User==", deletedUser)
        res.status(200).json({message: "User deleted Successfully", deletedUser})
        
    } catch (error) {
        console.log("Could not delete the user", error.message)
        return res.status(500).json({message: "User could not be deleted \n" + error.message})
    }
}