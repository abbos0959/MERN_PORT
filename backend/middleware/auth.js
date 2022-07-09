const jwt = require("jsonwebtoken");
const User = require("../model/user");

const secret = "test";

const auth = async (req, res, next) => {
   try {
      const token = req.headers.authorization.split(" ")[1];

      if (!token) {
         return res.status(404).json({ message: "siz tizimdan ro`yhatdan o`tishingiz shart" });
      }
      const tokencha = jwt.verify(token, "secret");
      const usercha = await User.findOne({ _id: tokencha.id });
      if (!usercha) {
         return res.status(401).json({ message: "bunday user mavjud emas" });
      }
   } catch (error) {
      res.status(404).json({
         message: "error middleware",
         
      });
   }
   next()
};

module.exports = auth;
