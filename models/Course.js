const mongoose = require("mongoose")
const Schema = mongoose.Schema

const CourseSchema = new Schema({
    // courseId:{
    //     type: Number,
    //     required: true
    // },
    courseName: {
        type: String,
        required: true
    },
    courseDescription: {
        type: String,
        required: true
    },
    instructor : { type: Schema.Types.ObjectId, ref: 'user' },
    category : { type: Schema.Types.ObjectId, ref: 'Category' }
}, { timestamps : { createdAt: 'created_at'}});

module.exports = Course = mongoose.model('courses', CourseSchema)
