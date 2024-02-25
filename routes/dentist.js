const express = require('express');
const router = express.Router();

// Route files
router.get('/', (req, res) => {
    res.status(200).json({ success: true, msg: 'Show all dentists' });
});

router.get('/:id', (req, res) => {
    res.status(200).json({ success: true, msg: `Show dentist ${req.params.id}` });
});

router.post('/', (req, res) => {
    res.status(200).json({ success: true, msg: 'Create new dentist' });
});

router.put('/:id', (req, res) => {
    res.status(200).json({ success: true, msg: `Update dentist ${req.params.id}` });
});

router.delete('/:id', (req, res) => {
    res.status(200).json({ success: true, msg: `Delete dentist ${req.params.id}`});
 });

module.exports = router;