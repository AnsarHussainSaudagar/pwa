// Simple console log for testing
console.log("ansar");

// Screen recording with getDisplayMedia()
navigator.mediaDevices.getDisplayMedia({
  video: {
    displaySurface: "browser" // Removed the incomplete part 'b'
  }
})
.then(res => {
  console.log("Display media stream:", res);
})
.catch(err => {
  console.error("Error accessing display media:", err);
});

// Service worker registration
if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch(error => {
        console.error('Service Worker registration failed:', error);
      });
//   });
}
