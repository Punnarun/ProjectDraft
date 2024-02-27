const express = require('express');
const {getDentists, getDentist, createDentist, updateDentist, deleteDentist} = require('../controllers/dentist');
const {protect} = require('../middleware/auth');
const router = express.Router();

router.route('/').get(getDentists).post(protect , createDentist);
router.route('/:id').get(getDentist).put(protect , updateDentist).delete(protect , deleteDentist);

module.exports = router;