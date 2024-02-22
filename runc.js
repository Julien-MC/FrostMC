// runc.js
javascript:window.onkeydown = function(event) {
    if (event.keyCode === 220) {
        (function() {
            var style = document.createElement('style');
            style.innerHTML = '* { cursor: none !important; }';
            document.head.appendChild(style);

            var customCursor = document.createElement('img');
            customCursor.src = 'https://i.ibb.co/0sk7SFG/cat-cursor.png'; // Replaced with the provided image URL
            customCursor.style.position = 'fixed';
            customCursor.style.top = '0';
            customCursor.style.left = '0';
            customCursor.style.zIndex = '999999';
            customCursor.style.width = '3%';
            customCursor.style.height = 'auto';
            customCursor.style.pointerEvents = 'none';
            document.body.appendChild(customCursor);

            function updateCustomCursorPosition(event) {
                customCursor.style.top = (event.clientY - customCursor.height / 2) + 'px';
                customCursor.style.left = (event.clientX - customCursor.width / 2) + 'px';

                var bgColor = getComputedStyle(document.body).backgroundColor;
                var brightness = calculateBrightness(bgColor);
                if (brightness < 128) {
                    customCursor.style.filter = 'invert(100%)';
                } else {
                    customCursor.style.filter = 'none';
                }
            }

            document.addEventListener('mousemove', updateCustomCursorPosition);

            function calculateBrightness(color) {
                var match = color.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
                if (!match) return null;
                var r = parseInt(match[1]);
                var g = parseInt(match[2]);
                var b = parseInt(match[3]);
                return (r * 299 + g * 587 + b * 114) / 1000;
            }
        })();
    } else if (event.keyCode === 192) {
        (function(){
            var code = prompt("Enter JavaScript code to run:");
            if (code) {
                var script = document.createElement('script');
                script.textContent = code;
                document.body.appendChild(script);
            } else {
                alert("No code provided!");
            }
        })();
    }
};
