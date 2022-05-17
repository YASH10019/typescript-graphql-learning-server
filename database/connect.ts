import mongoose from "mongoose";

export function connect() {
    mongoose.connect(process.env.MONGODB_URI as string).then(() => {
            console.log('Connected to MongoDB');
        }
    ).catch((err) => {
        console.error('Error connecting to MongoDB: ' + err);
    });
}
