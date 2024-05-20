const {Messengers, Users} = require ("../../models");

exports.index = async (req, res) => {
    res.json({
        status: 200,
        message: "prefix for end-poin messenger"
    });
};

exports.createData = async(req, res) => {
    const payloadData = req.body;
    try {
        const results = await Messengers.create(payloadData);
        res.json({
            status: 200,
            data: results
        });
    } catch(error){
        res.json({
            status: 502,
            message: {
                internal: error.message,
                user: "error creating message",
            },
            errors: error.errors,
        });
    }
};

exports.GetAll = async (req, res) => {
    try {
        const results = await Messengers.findAll({
            include: [
                {model: Users, as : 'Sender'},
                {model: Users, as : 'Receiver'}
            ]
        });
        res.json({
            status: 200,
            data: results,
        });
    } catch (error){
        res.json({
            status: 502,
            message: {
                internal: error.Messengers,
                user: "failed retrieve data"
            },
            errors: error.errors,
        });
    }
};

