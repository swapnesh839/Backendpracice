import mongoose from "mongoose";

const FacultiesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        required: true,
        trim: true,
        min: 18
    },
    fecultytype: {
        type: String,
        required: true,
        trim: true,
        enum: ["Teacher", "Staff", "Others"],
    },
    identitynumber: {
        type: Number,
        required: true,
        trim: true,
        unique: true,
        match: /[0-9]{9}/,
        min: 9
    }
});

// FacultiesSchema.index({ identitynumber: 1 }, { unique: true });
const FacultiesModel = mongoose.model("Faculties", FacultiesSchema);

export default FacultiesModel