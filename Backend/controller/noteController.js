const Note = require("../model/note");

// Create a note
exports.createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const note = await Note.create({ user: req.userId, title, content });
    res.status(201).json({ message: "Note created", note });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error creating note", error: err.message });
  }
};

// Get all notes for a user
exports.getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find({ user: req.userId });
    res.status(200).json(notes);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching notes", error: err.message });
  }
};

// Get a single note by ID
exports.getNoteById = async (req, res) => {
  try {
    const { noteId } = req.params;
    const note = await Note.findOne({ _id: noteId, user: req.userId });
    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json(note);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching note", error: err.message });
  }
};

// Update a note
exports.updateNote = async (req, res) => {
  try {
    const { noteId } = req.params;
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(
      noteId,
      { title, content, updatedAt: Date.now() },
      { new: true }
    );
    res.status(200).json({ message: "Note updated", updatedNote });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error updating note", error: err.message });
  }
};

// Delete a note
exports.deleteNote = async (req, res) => {
  try {
    const { noteId } = req.params;
    await Note.findByIdAndDelete(noteId);
    res.status(200).json({ message: "Note deleted" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error deleting note", error: err.message });
  }
};
