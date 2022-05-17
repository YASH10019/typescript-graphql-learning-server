import mongoose from "mongoose";

export function connect() {
    console.log(process.env.MONGODB_URI);
    mongoose.connect(process.env.MONGODB_URI as string).then(() => {
            console.log('Connected to MongoDB');
        }
    ).catch((err) => {
        console.error('Error connecting to MongoDB: ' + err);
    });
}
