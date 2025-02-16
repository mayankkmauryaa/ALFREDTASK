const express = require("express");
const Flashcard = require("../models/Flashcard");
const router = express.Router();

// Add a flashcard
router.post("/flashcards", async (req, res) => {
  try {
    const { question, answer } = req.body;
    const flashcard = new Flashcard({ question, answer });
    await flashcard.save();
    res.status(201).json(flashcard);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all flashcards (sorted by next review date)
router.get("/flashcards", async (req, res) => {
  try {
    const flashcards = await Flashcard.find().sort({ nextReview: 1 });
    res.json(flashcards);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update flashcard (move to next box or reset)
router.put("/flashcards/:id", async (req, res) => {
  try {
    const { correct } = req.body;
    const flashcard = await Flashcard.findById(req.params.id);
    if (!flashcard) return res.status(404).json({ message: "Flashcard not found" });

    const reviewIntervals = [1, 2, 4, 7, 15]; // Days per box
    if (correct) {
      flashcard.box = Math.min(flashcard.box + 1, 5);
    } else {
      flashcard.box = 1;
    }
    flashcard.nextReview = new Date(Date.now() + reviewIntervals[flashcard.box - 1] * 24 * 60 * 60 * 1000);

    await flashcard.save();
    res.json(flashcard);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete flashcard
router.delete("/flashcards/:id", async (req, res) => {
  try {
    await Flashcard.findByIdAndDelete(req.params.id);
    res.json({ message: "Flashcard deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
