import connectDB from "./connect";
import Mywork from "@/app/models/mymodel";

const handler = async (req, res) => {
    await connectDB();
    const id = req.query.id;
    try {
        const work = await Mywork.findById(id);
        if (!work) {
            return res.status(404).json({ success: false, message: "Work not found" });
        }
        res.json(work);
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "An error occurred while Getting the work" });
    }
};

export default handler;
