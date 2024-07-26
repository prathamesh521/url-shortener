const Url = require('../models/urlModel');

const fetchUrlController = async (req, res) => {
    const url = await Url.find({});

    if(!url){
        return res.send({ message: 'No URL found' });
    }
    return res.send({ data: url, message: 'GET URL controller success' });
};
const addUrlController = async (req, res) => {
    const { shortId, redirectUrl } = req.body;

    if(!shortId || !redirectUrl){
        return res.send({ message: 'Please provide all required fields' });
    }

    const urlData = {
        shortId,
        redirectUrl
    }

    Url.create(urlData)
    .then((url) => {
        return res.send({ data: url, message: 'POST URL controller success' });
    }).catch((error) => {   
        return res.send({ message: error.message });
    }
    );
};
const updateUrlController = async (req, res) => {
    const id = req.params.id;

    if(!id){
        return res.send({ message: 'Please provide URL id' });
    }

    const updateData = Url.findByIdAndUpdate(id, req.body, { new: true });

    updateData.then((url) => {
        return res.send({ data: url, message: 'PATCH URL controller success' });
    }).catch((error) => {
        return res.send({ message: error.message });
    });
};
const removeUrlController = async (req, res) => {
    const id = req.params.id;

    if(!id){
        return res.send({ message: 'Please provide URL id' });
    }

    const deleteData = Url.findByIdAndDelete(id);

    deleteData.then(() => { 
        return res.send({ message: 'DELETE URL controller success' });
    }).catch((error) => {
        return res.send({ message: error.message });
    });
};

module.exports = { fetchUrlController, addUrlController, updateUrlController, removeUrlController };