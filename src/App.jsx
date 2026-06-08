import { useEffect } from "react";
import InvitationPage from "./InvitationPage";
import legacyMarkup from "./legacy-markup.html?raw";
import { initLegacy } from "./legacy-init";
import { initMetaPixel } from "./meta-pixel";
import "./invitation.css";
import "./legacy.css";

function isInvitationRoute() {
  return window.location.pathname.replace(/\/$/, "") === "/invitation-shafiyah-expo";
}

export default function App() {
  const isInvitation = isInvitationRoute();

  useEffect(() => {
    if (!isInvitation) {
      initLegacy();
    }

    initMetaPixel();
  }, [isInvitation]);

  if (isInvitation) {
    return <InvitationPage />;
  }

  return <div dangerouslySetInnerHTML={{ __html: legacyMarkup }} />;
}
