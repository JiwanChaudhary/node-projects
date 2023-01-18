const UserDetails = require('../model/userSchema');

const asyncWrapper = (fn) => {
    return async (req, res, next) => {
        try {
            await fn(req, res, next)
        } catch (error) {
            next(error)
        }
    }
}

const addUser = asyncWrapper(async (req, res) => {
    const userData = req.body;
    console.log(userData);
    const addUser = new UserDetails(userData)
    // try {
    await addUser.save()
    res.status(201).json({ addUser })
    // } catch (error) {
    //     res.status(409).json({ message: error.message })
    // }
})

const getUsers = asyncWrapper(async (req, res) => {
    // try {
    const allUsers = await UserDetails.find({});
    // console.log(allUsers);
    res.status(200).json({ allUsers });
    // console.log(allUsers);
    // } catch (error) {
    //     res.status(404).json({ message: error.message })
    // }
})

const getUser = asyncWrapper(async (req, res) => {
    // try {
    // console.log(req.params.id);
    const id = req.params.id;
    // const user = await UserDetails.find({ _id: id });
    const user = await UserDetails.findById(id);
    // console.log(allUsers);
    res.status(200).json({ user });
    // console.log(allUsers);
    // } catch (error) {
    //     res.status(404).json({ message: error.message })
    // }
})

const editUser = asyncWrapper(async (req, res) => {
    const user = req.body;
    const editUser = new UserDetails(user);
    const id = req.params.id;
    await UserDetails.updateOne({ _id: id }, editUser);
    res.status(201).json(editUser)
})

const deleteUser = asyncWrapper(async (req, res) => {
    const id = req.params.id;
    await UserDetails.deleteOne({ _id: id });
    res.status(200).json({ message: 'User deleted Successfully' })
})

module.exports = { addUser, getUsers, getUser, editUser, deleteUser }