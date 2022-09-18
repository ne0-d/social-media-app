import express, { application } from "express";
import {
  deleteUser,
  followUser,
  getAllUsers,
  getUser,
  unfollowUser,
  updateUser,
} from "../Controllers/UserController.js";
import authMiddleWare from "../middleware/AuthMiddleware.js";
const router = express.Router();

//Get user
// router.get("/:id", async (req, res) => {
//   res.send("User route");
// });

router.get("/", getAllUsers);
router.get("/:id", getUser);
router.put("/:id", authMiddleWare, updateUser);
router.delete("/:id", authMiddleWare, deleteUser);
router.put("/:id/follow", authMiddleWare, followUser);
router.put("/:id/unfollow", authMiddleWare, unfollowUser);

export default router;
