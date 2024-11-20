const express = require("express");
const {
  createNote,
  getAllNotes,
  updateNote,
  deleteNote,
} = require("../controller/noteController");

const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, createNote);
router.get("/", authMiddleware, getAllNotes);
router.put("/:noteId", authMiddleware, updateNote);
router.delete("/:noteId", authMiddleware, deleteNote);

module.exports = router;
