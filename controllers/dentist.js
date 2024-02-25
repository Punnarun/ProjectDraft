//@desc Get all dentists
//@route GET/api/v1/dentists
//@access Public
exports.getDentists = async (req, res, next) => {
    res.status(200).json({ success: true, msg: 'Show all dentists' });
}

//@desc Get single dentist
//@route GET/api/v1/dentists/:id
//@access Public
exports.getDentist = async (req, res, next) => {
    res.status(200).json({ success: true, msg: `Show dentist ${req.params.id}` });
}

//@desc Create new dentist
//@route POST/api/v1/dentists
//@access Private
exports.createDentist = async (req, res, next) => {
    res.status(200).json({ success: true, msg: 'Create new dentist' });
}

//@desc Update dentist
//@route PUT/api/v1/dentists/:id
//@access Private
exports.updateDentist = async (req, res, next) => {
    res.status(200).json({ success: true, msg: `Update dentist ${req.params.id}` });
}

//@desc Delete dentist
//@route DELETE/api/v1/dentists/:id
//@access Private
exports.deleteDentist = async (req, res, next) => {
    res.status(200).json({ success: true, msg: `Delete dentist ${req.params.id}`});
}