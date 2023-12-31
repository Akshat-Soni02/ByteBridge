const express = require("express");
const {
  registerUser,
  loginUser,
  logout,
  forgotPassword,
  resetPassword,
  getUserDetails,
  verifyotp,
} = require("../Controllers/userController.js");
const { isAuthenticatedUser } = require("../middleware/auth");
const router = express.Router();

//routes
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(isAuthenticatedUser, logout);
router.route("/password/forgot").post(forgotPassword);
router.route("/verifyOtp").post(verifyotp);
router.route("/password/reset/:token").put(resetPassword);
router.route("/me").get(isAuthenticatedUser,getUserDetails);

module.exports = router;
