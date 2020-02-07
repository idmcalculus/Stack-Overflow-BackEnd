import User from '../models/user';

exports.userSignup = async (req, res) => {
    // user signup
    try {
        const user = new User(req.body);
        await user.save();
        const token = await user.generateAuthToken();
        res.status(201).send({ user, token });
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.userLogin = async (req, res) => {
    // user sign in
    try {
        const { email, password } = req.body;
        const user = await User.findByCredentials(email, password);
        if (!user) {
            return res.status(401).send({error: 'Login failed! Check authentication credentials'});
        }
        const token = await user.generateAuthToken();
        res.send({ user, token });
    } catch (error) {
        res.status(400).send(error);
    }

};

exports.searchUser = async (req, res) => {
	User.find({}, (err, users) => {
		if (err) return console.error(err);
		res.header('Content-Type', 'application/json');
		res.status(200).send("{\"data\": " + JSON.stringify(users) + "}");
	});
};