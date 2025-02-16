const mongoose = require("mongoose");

const FlashcardSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
  box: { type: Number, default: 1 },  // Leitner Box (1-5)
  nextReview: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Flashcard", FlashcardSchema);
