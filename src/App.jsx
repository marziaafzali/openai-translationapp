import { useState } from "react";
import "./App.css";
import top from "./assets/top.jpg";
import fr from "./assets/fr.jpg";
import sp from "./assets/sp.jpg";
import jap from "./assets/jap.jpg";
<<<<<<< HEAD
import afg from "./assets/afg.jpg"; 

function App() {
  console.log("🔑 Loaded key:", import.meta.env.VITE_OPENAI_API_KEY);

=======

function App() {
    console.log("🔑 Loaded key:", import.meta.env.VITE_OPENAI_API_KEY);
>>>>>>> 4f1a4cf5cd8dcd05dee40a0a487de0b99e370352
  const [text, setText] = useState("");
  const [language, setLanguage] = useState("fr");
  const [translated, setTranslated] = useState("");
  const [showResult, setShowResult] = useState(false);

  const handleTranslate = async () => {
    try {
      console.log("➡️ Sending request to OpenAI:", { text, language });

      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
<<<<<<< HEAD
          Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`, // Make sure your key is set
=======
          // ⚠️ Replace with your actual key OR use env vars via Vite (see below)
          Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
>>>>>>> 4f1a4cf5cd8dcd05dee40a0a487de0b99e370352
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [
            { role: "system", content: "You are a helpful translator." },
<<<<<<< HEAD
            {
              role: "user",
              content: `Translate this text into ${language}: "${text}"`,
            },
=======
            { role: "user", content: `Translate this text into ${language}: "${text}"` },
>>>>>>> 4f1a4cf5cd8dcd05dee40a0a487de0b99e370352
          ],
          temperature: 0,
          max_tokens: 200,
        }),
      });

      console.log("⬅️ Raw response:", response);

      if (!response.ok) {
        const errText = await response.text();
        console.error("❌ OpenAI API returned error:", response.status, errText);
        setTranslated(`Error ${response.status}: ${errText}`);
        setShowResult(true);
        return;
      }

      const data = await response.json();
      console.log("⬅️ Parsed JSON:", data);

<<<<<<< HEAD
      const translation =
        data.choices?.[0]?.message?.content || "⚠️ No translation returned";
=======
      const translation = data.choices?.[0]?.message?.content || "⚠️ No translation returned";
>>>>>>> 4f1a4cf5cd8dcd05dee40a0a487de0b99e370352
      setTranslated(translation);
      setShowResult(true);
    } catch (err) {
      console.error("❌ Fetch failed:", err);
      setTranslated("Error: " + err.message);
      setShowResult(true);
    }
  };

  const handleReset = () => {
    setText("");
    setTranslated("");
    setShowResult(false);
    setLanguage("fr");
  };

  return (
    <div className="app-container">
      <img className="topimg" src={top} alt="top" />

      {!showResult ? (
        <div className="herobox">
          <h2>Text To Translate</h2>
          <textarea
            placeholder="Text to translate..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <div className="language-options">
            <h2>Select Language</h2>
<<<<<<< HEAD

=======
>>>>>>> 4f1a4cf5cd8dcd05dee40a0a487de0b99e370352
            <label>
              <input
                type="radio"
                value="fr"
                checked={language === "fr"}
                onChange={(e) => setLanguage(e.target.value)}
              />
              French
              <img src={fr} alt="French Flag" className="flag-icon" />
            </label>

            <label>
              <input
                type="radio"
                value="es"
                checked={language === "es"}
                onChange={(e) => setLanguage(e.target.value)}
              />
              Spanish
              <img src={sp} alt="Spanish Flag" className="flag-icon" />
            </label>

            <label>
              <input
                type="radio"
                value="ja"
                checked={language === "ja"}
                onChange={(e) => setLanguage(e.target.value)}
              />
              Japanese
              <img src={jap} alt="Japanese Flag" className="flag-icon" />
            </label>
<<<<<<< HEAD

         
            <label>
              <input
                type="radio"
                value="fa"
                checked={language === "fa"}
                onChange={(e) => setLanguage(e.target.value)}
              />
              Persian
              <img src={afg} alt="Persian Flag" className="flag-icon" />
            </label>
=======
>>>>>>> 4f1a4cf5cd8dcd05dee40a0a487de0b99e370352
          </div>

          <button className="btn" onClick={handleTranslate}>
            Translate
          </button>
        </div>
      ) : (
        <div className="result-box">
          <h2>Original Text</h2>
          <textarea value={text} readOnly title="Original text" />

          <h2>Your Translation</h2>
          <textarea value={translated} readOnly aria-label="Translated text" />

          <button className="btn" onClick={handleReset}>
            Start Over
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
