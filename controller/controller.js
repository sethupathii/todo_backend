const Data = require('../mongoose/model');

exports.getData = async (req, res) => {
    try {
        const data = await Data.find({}, 'name').exec();
        if (data.length === 0) {
            res.status(404).json({ error: "No Data found" })
        } else {
            res.json(data);
        }
    } catch (err) {
        res.status(500).json({ error: "Catch Blocks Works" });
    }
}

exports.saveData = (req, res) => {
    const { name } = req.body
    Data.create({ name })
        .then(data => {
            console.log("Saved Successfully");
            res.status(201).send(data);
        }).catch(err => console.log(err))
}

exports.updateData = (req, res) => {
    const id = req.params.id;
    const name = req.body.name;
    Data.findByIdAndUpdate(id, { name })
        .then(() => {
            res.send("Updated Successfully");
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send({ error: err.message, note: "Something went wrong" });
        });
}

exports.deleteData = (req, res) => {
    const id = req.params.id;
    Data.findByIdAndDelete(id)
        .then(() => {
            console.log("Deleted Sucessfully");
            res.send("Deleted Sucessfully");
        }).catch(err => console.log(err));
}