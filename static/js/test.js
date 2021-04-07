// For testing EU cookie consent
window.addEventListener("load", function () {
  window.cookieconsent.initialise({
    "palette": {
      "popup": {
        "background": "#00A3E0",
        "text": "#FFFFFF"
      },
      "button": {
        "background": "transparent",
        "text": "#FFFFFF",
        "border": "#FFFFFF"
      }
    },
    "type": "opt-in",
    "content": {
      "href": "https://librestream.com/privacy-notice/",
      "dismiss": "Decline",
      "allow": "Accept",
    }
  });
});
