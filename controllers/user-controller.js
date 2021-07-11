const { User } = require('../models');

const userController = {
    // get all users
    getAllUsers(req, res) {
        User.find({})
        .populate({
            path: 'thoughts',
            select: '-__v'
        })
        .select('-__v')
        .sort({ _id: -1 })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(404).json(err);
        })
    },
    // get a single user by id
    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
        .populate({
            path: 'thoughts',
            select: '-__v'
        })
        .select('-__v')
        .then(dbUserData => {
            // if no user is found send error
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            res.json(dbUserData0)
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },
    // create user
    createUser({ body }, res) {
        User.create(body)
        .then(dbUserData => res.json(dbUserData))
        .catch(err => res.status(400).json(err))
    }
}

module.exports = userController;
