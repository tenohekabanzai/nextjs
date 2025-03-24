const mongoose = require('mongoose')
const yserSchema  = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    address: String,
})

const Yser = mongoose.models.Yser || mongoose.model('Yser',yserSchema)

export default Yser