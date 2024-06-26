const Content = require('../models/Content');

exports.createContent = async (req, res) => {
    const { title, body } = req.body;
    try {
        const newContent = new Content({ title, body });
        await newContent.save();
        res.status(201).json(newContent);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getContent = async (req, res) => {
    try {
        const contents = await Content.find();
        res.status(200).json(contents);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.updateContent = async (req, res) => {
    const { id } = req.params;
    const { title, body } = req.body;
    try {
        const updatedContent = await Content.findByIdAndUpdate(id, { title, body }, { new: true });
        res.status(200).json(updatedContent);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.deleteContent = async (req, res) => {
    const { id } = req.params;
    try {
        await Content.findByIdAndDelete(id);
        res.status(200).json({ message: 'Content deleted' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};