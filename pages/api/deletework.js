import connectDB from "./connect";
import Mywork from "@/app/models/mymodel";

const handler = async (req, res) => {
    await connectDB();
    const id = req.query.id;
    try {
        const work = await Mywork.findByIdAndDelete(id);
        if (!work) {
            return res.status(404).json({ success: false, message: "Work not found" });
        }
        res.json({success:true , message : "Deleted successfully"});
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "An error occurred while Deleting the work" });
    }
};

export default handler;
