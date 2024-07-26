
const fetchUrlController = async (req, res) => {
    return res.send({ message: 'GET URL controller' });
};
const addUrlController = async (req, res) => {
    return res.send({ message: 'POST URL controller' });
};
const updateUrlController = async (req, res) => {
    return res.send({ message: 'PATCH URL controller' });
};
const removeUrlController = async (req, res) => {
    return res.send({ message: 'DELETE URL controller' });
};

module.exports = { fetchUrlController, addUrlController, updateUrlController, removeUrlController };