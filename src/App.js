import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🍇": "Grapes",
  "🍈": "Melon",
  "🍉": "Watermelon",
  "🍊": "Tangerine",
  "🍋": "Lemon",
  "🍌": "Banana",
  "🍍": "Pineapple",
  "🥭": "Mango",
  "🍎": "Red Apple",
  "🍏": "Green Apple",
  "🍐": "Pear",
  "🍑": "Peach",
  "🍒": "Cherries",
  "🍓": "Strawberry",
  "🫐": "Blueberries",
  "🥝": "Kiwi Fruit"
};

const emojis = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("Enter emoji to find translation");
  const [inputEmoji, setInputEmoji] = useState("");

  const handleInputChange = (event) => {
    setMeaning(event.target.value);

    if (event.target.value in emojiDictionary) {
      setMeaning(emojiDictionary[event.target.value]);
    } else {
      setMeaning("Emoji not found!");
    }
  };

  const handleEmojiClick = (emoji) => {
    setMeaning(emojiDictionary[emoji]);
  };

  return (
    <div className="App">
      <h1> Emoji Translator </h1>

      <input onChange={handleInputChange} />

      <h2> {meaning} </h2>

      <div className="list-of-emojis">
        {emojis.map((emoji) => {
          return (
            <span
              onClick={() => {
                handleEmojiClick(emoji);
              }}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
