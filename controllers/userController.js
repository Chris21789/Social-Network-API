const { User } = require("../models");

module.exports = {
    async getUsers(req, res) {
        try {
            const users = await User.find();
            res.json(users);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async getSingleUser(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.userId })
            .select('-__v')
            .populate('thoughts')
            .populate('friends');

            if(!user) {
                return res.status(404).json({ message: 'No user with that ID' });
            }

            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async createUser(req, res) {
        try {  
            const user = await User.create(req.body);
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // async updateUser(req, res) {
    //     try {

    //     } catch (err) {

    //     }
    // },
    // async deleteUser(req, res) {
    //     try {

    //     } catch (err) {

    //     }
    // },
    // async addFriend(req, res) {
    //     try {

    //     } catch (err) {

    //     }
    // },
    // async deleteFriend(req, res) {
    //     try {

    //     } catch (err) {

    //     }
    // },
};