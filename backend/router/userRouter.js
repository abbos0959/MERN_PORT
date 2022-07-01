const express=require("express")
const router=express.Router()
const UserController=require("../controller/userController")


router.route("/signup").post(UserController.signup)
router.route("/login").post(UserController.login)
router.route("/googlesignin").post(UserController.GoogleSign)

module.exports=router