const UserDetails = require('../model/userSchema');

const addUser = async (req, res) => {
    const userData = req.body;
    console.log(userData);
    const addUser = new UserDetails(userData)
    try {
        await addUser.save()
        res.status(201).json({ addUser })
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

const getUsers = async (req, res) => {
    try {
        const allUsers = await UserDetails.find({});
        // console.log(allUsers);
        res.status(200).json({ allUsers });
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

module.exports = { addUser, getUsers }