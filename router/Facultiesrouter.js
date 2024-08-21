import express from "express";
import FacultiesModel from "../Schemas/FacultiesModel.js";


const FacultiesRouter = express.Router();


FacultiesRouter.post("/", async (req, res) => {
    try {
        const data = req.body
        const newStudent = new FacultiesModel(data);
        const savedStudent = await newStudent.save();
        res.status(201).json(savedStudent);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

FacultiesRouter.patch("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const updatedFaculty = await FacultiesModel.findByIdAndUpdate(id, data);

        if (!updatedFaculty) {
            return res.status(404).json({ message: "Faculty not found" });
        }

        res.status(200).json(updatedFaculty);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
FacultiesRouter.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const updatedFaculty = await FacultiesModel.find();
        const Faculty = updatedFaculty.filter((item) => item._id == id)
        if (Faculty.length == 0) {
            return res.status(404).json({ message: "Faculty not found" });
        }

        res.status(200).json(Faculty);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

FacultiesRouter.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;

        // Replace the entire faculty document with the new data
        const updatedFaculty = await FacultiesModel.findByIdAndUpdate(id, data,
            { new: true, runValidators: true }
        );

        if (!updatedFaculty) {
            return res.status(404).json({ message: "Faculty not found" });
        }

        res.status(200).json(updatedFaculty);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
FacultiesRouter.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;

        // Replace the entire faculty document with the new data
        const updatedFaculty = await FacultiesModel.findByIdAndDelete(id, data, { new: true, overwrite: true });

        if (!updatedFaculty) {
            return res.status(404).json({ message: "Faculty not found" });
        }

        res.status(200).json(updatedFaculty);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

FacultiesRouter.get("/", async (req, res) => {
    const data = await FacultiesModel.find();
    res.send(data)
})


export default FacultiesRouter