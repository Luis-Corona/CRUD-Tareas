import connectDB from "./connect";
import Mywork from "@/app/models/mymodel";

const handler = async (req, res) => {
    await connectDB();
    const id = req.query.id;
    const work = req.body.work;
    try {
        const updatedWork = await Mywork.findByIdAndUpdate(id, { work }, { new: true });
        if (!updatedWork) {
            return res.status(404).json({ success: false, message: "Work not found" });
        }
        res.json({ success: true, message: "Work updated!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "An error occurred while updating the work" });
    }
};

export default handler;
