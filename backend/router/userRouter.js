const express=require("express")
const router=express.Router()
const UserController=require("../controller/userController")


router.route("/signup").post(UserController.signup)
router.route("/login").post(UserController.login)

module.exports=router