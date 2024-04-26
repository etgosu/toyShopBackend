const User = require('../models/User'); // 모델 경로에 따라 수정해주세요.

exports.createUser = async (req, res) => {
    try {
        const userItem = new User(req.body); // User 모델을 사용하여 인스턴스 생성
        await userItem.save(); // 데이터베이스에 저장
        return res.status(201).send({ message: 'User item successfully added', userItem });
    } catch (err) {
        console.log(err);
        return res.status(500).send({ err: err.message });
    }
};

exports.listUsers = async (req, res) => {
    try {
        const userList = await User.find();
        return res.send({ userList });
    } catch (err) {
        console.log(err);
        return res.status(500).send({ err: err.message });
    }
};