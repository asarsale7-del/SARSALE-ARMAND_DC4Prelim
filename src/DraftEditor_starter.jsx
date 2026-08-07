import { useEffect, useRef, useState } from "react";

function DraftEditorStarter() {
  const [text, setText] = useState("");
  const [renderCountDisplay, setRenderCountDisplay] = useState(0);
  const inputRef = useRef(null);
  const renderCount = useRef(0);
  const previousTextRef = useRef("");

  // TODO 1: focus the input only once when the component mounts.
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // TODO 2: log the draft whenever text changes.
  useEffect(() => {
    console.log(`Draft saved: ${text}`);

    return () => {
      console.log(`Draft cleaned up from: ${previousTextRef.current}`);
    };
  }, [text]);

  useEffect(() => {
    renderCount.current += 1;
    setRenderCountDisplay(renderCount.current);
  }, [text]);

  useEffect(() => {
    previousTextRef.current = text;
  }, [text]);

  return (
    <section
      style={{
        maxWidth: "420px",
        margin: "2rem auto",
        padding: "1.5rem",
        border: "1px solid #d0d7de",
        borderRadius: "12px",
        fontFamily: "sans-serif",
      }}
    >
      <h2>Draft Editor</h2>
      <label htmlFor="draft-input">Type your draft</label>
      <input
        id="draft-input"
        ref={inputRef}
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="Start typing..."
        style={{
          width: "100%",
          padding: "0.75rem",
          marginTop: "0.5rem",
          marginBottom: "0.75rem",
          borderRadius: "8px",
          border: "1px solid #cdd4db",
        }}
      />

      <p>Character count: {text.length}</p>

      {/* TODO 4: display renderCount.current below this comment. */}
      <p>Render count: {renderCountDisplay}</p>
    </section>
  );
}

export default DraftEditorStarter;

// Explanation: useRef is used for values that need to persist across renders without causing React to re-render on their own. In this component, renderCount is a ref, so it keeps increasing in the background as the component re-renders, but it does not automatically update the UI by itself. The displayed render count uses state so the screen can refresh when the text changes, while the ref continues to hold the underlying count in the background. This is the key difference between a reactive value (state) and a persistent non-reactive value (ref).
