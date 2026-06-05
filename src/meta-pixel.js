const META_PIXEL_ID = "704000653860616";

let didInit = false;

function isLocalhost() {
  return ["localhost", "127.0.0.1", "::1"].includes(window.location.hostname);
}

function loadMetaPixel() {
  if (window.fbq) {
    window.fbq("init", META_PIXEL_ID);
    window.fbq("track", "PageView");
    return;
  }

  window.fbq = function fbq() {
    if (window.fbq.callMethod) {
      window.fbq.callMethod.apply(window.fbq, arguments);
    } else {
      window.fbq.queue.push(arguments);
    }
  };
  window.fbq.push = window.fbq;
  window.fbq.loaded = true;
  window.fbq.version = "2.0";
  window.fbq.queue = [];

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://connect.facebook.net/en_US/fbevents.js";

  const firstScript = document.getElementsByTagName("script")[0];
  firstScript.parentNode.insertBefore(script, firstScript);

  window.fbq("init", META_PIXEL_ID);
  window.fbq("track", "PageView");
}

function scheduleMetaPixelLoad() {
  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(loadMetaPixel, { timeout: 2500 });
    return;
  }

  window.setTimeout(loadMetaPixel, 1500);
}

export function initMetaPixel() {
  if (didInit || typeof window === "undefined" || isLocalhost()) {
    return;
  }

  didInit = true;

  if (document.readyState === "complete") {
    scheduleMetaPixelLoad();
    return;
  }

  window.addEventListener("load", scheduleMetaPixelLoad, { once: true });
}
