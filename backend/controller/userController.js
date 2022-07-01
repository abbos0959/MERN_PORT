const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../model/user");

const signup = async (req, res) => {
   const { email, password, lastname,firstname } = req.body;
   try {
      const OldUser = await User.findOne({ email });
      if (OldUser) {
         return res.status(404).json({ message: "bunday user allaqchon mavjud" });
      }
      const Hashpassword = await bcrypt.hash(password, 12);
      const result = await User.create({
         email,
         password: Hashpassword,
         name:`${firstname} ${lastname}`
      });
      const token = jwt.sign({ id: result._id }, "secret", { expiresIn: "1d" });
      res.status(200).json({
         result: result,
         token,
      });
   } catch (error) {
      res.status(500).json({
         message: "user ro`yhatga olinmadi signup hato",
         status: error.message,
      });
   }
};

const login = async (req, res) => {
   const { email, password } = req.body;

   try {
      const USERBORMI = await User.findOne({ email });
      if (!USERBORMI) {
         return res.status(500).json({ message: "bunday user mavjud emas" });
      }

      const ComparePassword = await bcrypt.compare(password, USERBORMI.password);
      if (!ComparePassword) {
         return res.status(500).json({ message: "bunday user mavjud emas" });
      }
      const token=jwt.sign({id:USERBORMI._id},"secret",{expiresIn:"1h"})

      res.status(200).json({
        message:"success",
        USERBORMI,
        token
      })
   } catch (error) {
      res.status(500).json({
         message: error.message,
         status: "failed login",
      });
   }
};
module.exports = { signup,login };
