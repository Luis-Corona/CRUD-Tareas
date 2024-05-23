import mongoose from "mongoose";
const myworkSchema = new mongoose.Schema({
    work: {
        type: String,
        required: true
    }
});
let Mywork;
try {
    Mywork = mongoose.model('Mywork');
} catch (e) {
    Mywork = mongoose.model('Mywork', myworkSchema);
}

export default Mywork;
