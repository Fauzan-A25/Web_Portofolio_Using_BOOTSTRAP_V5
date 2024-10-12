document.getElementById("CV").addEventListener("click", function() {
  window.location.href = "https://drive.google.com/file/d/19f3bSYFbZTvG3eKWngkDdv9s8fWTQdK5/view?usp=sharing"; 
});

document.addEventListener('contextmenu', event => event.preventDefault());
  document.addEventListener('keydown', function(e) {
    // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
    if (e.keyCode == 123 || (e.ctrlKey && e.shiftKey && (e.keyCode == 'I'.charCodeAt(0) || e.keyCode == 'J'.charCodeAt(0))) || (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0))) {
      e.preventDefault();
    }
  });