const { default: Mywork } = require("@/app/models/mymodel");
const { default: connectDB } = require("./connect");

const handler = async (req, res) => {
    try {
        await connectDB();
        const works = await Mywork.find({});
        res.json(works);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export default handler;
