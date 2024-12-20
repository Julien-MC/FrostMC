javascript:(function() {
    // Game Menu Logic
    var e = document.createElement('div');
    e.id = 'game-menu';
    e.style.display = 'none';
    e.innerHTML = '<button onclick="runGame(\'Geometry Dash\')">Geometry Dash</button><button onclick="runGame(\'Subzero\')">Subzero</button><button onclick="runGame(\'Meltdown\')">Meltdown</button>';
    var t = document.createElement('style');
    t.innerHTML = `
        #game-menu {
            position: fixed;
            top: 0;
            left: 0;
            background-color: rgba(0, 0, 0, 0.5);
            padding: 10px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
            z-index: 9999;
        }
        #game-menu button {
            display: block;
            margin-bottom: 5px;
            padding: 5px 10px;
            background-color: #ccc;
            border: none;
            border-radius: 3px;
            cursor: pointer;
        }
        #game-menu button:hover {
            background-color: #ddd;
        }
    `;
    document.head.appendChild(t);
    document.body.appendChild(e);

    var sequence = "geometry";
    var index = 0;

    document.addEventListener('keydown', function(event) {
        // Handle game menu sequence
        if (event.key.toLowerCase() === sequence[index]) {
            index++;
            if (index === sequence.length) {
                document.getElementById('game-menu').style.display = 'block';
                index = 0; // Reset sequence after success
            }
        } else {
            index = event.key.toLowerCase() === 'g' ? 1 : 0; // Reset or start over
        }

        // Handle run.js logic (triggered by backtick ` key)
        if (event.keyCode === 192) {
            (function() {
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
    });

    window.runGame = function(e) {
        var t;
        switch (e) {
            case 'Geometry Dash':
                t = 'https://scratch.mit.edu/projects/embed/105500895/?autostart=false';
                break;
            case 'Subzero':
                t = 'https://scratch.mit.edu/projects/embed/216343253/?autostart=false';
                break;
            case 'Meltdown':
                t = 'https://scratch.mit.edu/projects/embed/143663274/?autostart=false';
                break;
            default:
        }
        if (t) {
            window.open(t, '_blank', 'width=400,height=300,scrollbars=no,resizable=yes').focus();
            document.getElementById('game-menu').style.display = 'none';
        }
    };
})();
