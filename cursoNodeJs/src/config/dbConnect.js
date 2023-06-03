import mongoose from "mongoose"

mongoose.connect("mongodb+srv://admin:admin@cluster0.dgvbcg8.mongodb.net/node")

let db = mongoose.connection;

export default db;