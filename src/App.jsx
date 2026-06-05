import { useEffect } from "react";
import legacyMarkup from "./legacy-markup.html?raw";
import { initLegacy } from "./legacy-init";
import { initMetaPixel } from "./meta-pixel";
import "./legacy.css";

export default function App() {
  useEffect(() => {
    initLegacy();
    initMetaPixel();
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: legacyMarkup }} />;
}
