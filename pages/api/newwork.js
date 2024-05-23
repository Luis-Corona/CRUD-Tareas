import connectDB from "./connect";
import Mywork from "@/app/models/mymodel";

const handler = async (req, res) => {
    await connectDB();
    const work = req.body.work; 
    try {
        await Mywork.create({ work });
        res.json({ success: true, message: "Work created!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "An error occurred while creating the work" });
    }
};

export default handler;
