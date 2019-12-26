import React, { useState,useEffect } from "react";
import { useSpeechSynthesis } from "react-speech-kit";
import './App.css'

export default function SpeechInput() {
  const [value, setValue] = useState("");
  const { speak } = useSpeechSynthesis();
  useEffect(() => {

    setValue("merry christmas")
  }, [])

  return (
    <div className="background">
      <textarea
        placeholder="click me"
        value={value}

      />
      <button className = "Button" onClick={() => speak({ text: value })}>Speak</button>
    </div>
  );
}


