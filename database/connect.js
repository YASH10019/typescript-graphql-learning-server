import mongoose from "mongoose";
// const mongoose = require('mongoose');


export function connect() {
    try {

        // console.log(process.env.MONGODB_URI)
        mongoose.connect(process.env.MONGODB_URI, (err, db) => {
            if (err === null) {
                console.log('Connected to MongoDB');
            }
            else {
                console.error('Error connecting to MongoDB: ' + err);
                res.status(500).json({ "status": 0, "message": err });
            }
        })
    } catch (err) {
        console.error('Error connecting to MongoDB: ' + err);
    }
}
