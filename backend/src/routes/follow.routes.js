const express = require("express");
const router = express.Router();
const requireAuth = require("../middlewares/auth.middleware");
const {
  followUser,
  unfollowUser,
  getFollowStats,
} = require("../controllers/follow.controller");
router.post("/:id/follow", requireAuth, followUser);
router.post("/:id/unfollow", requireAuth, unfollowUser);
router.get("/:id/stats", requireAuth, getFollowStats);

module.exports = router;
