import { useEffect } from "react";
import legacyMarkup from "./legacy-markup.html?raw";
import { initLegacy } from "./legacy-init";
import "./legacy.css";

export default function App() {
  useEffect(() => {
    initLegacy();
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: legacyMarkup }} />;
}
