const mongoose = require('mongoose');

const DentistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
        //unique: true,
        trim: true,
        maxlength: [50, 'Name can not be more than 50 characters']
    },
    experience: {
        type: Number,
        required: [true, 'Please add experience']
    },
    expertise: {
        type: String,
        required: [true, 'Please add expertise'],
        maxlength: [500, 'Expertise can not be more than 500 characters']
    }
});

module.exports = mongoose.model('Dentist', DentistSchema);