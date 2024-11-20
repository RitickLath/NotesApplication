const express = require("express");
const {
  createNote,
  getAllNotes,
  updateNote,
  deleteNote,
  getNoteById,
} = require("../controller/noteController");

const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, createNote);
router.get("/", authMiddleware, getAllNotes);
router.put("/:noteId", authMiddleware, updateNote);
router.delete("/:noteId", authMiddleware, deleteNote);
router.get("/:noteId", authMiddleware, getNoteById);

module.exports = router;
