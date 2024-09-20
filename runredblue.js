javascript:(function(){
    var vibrancy = 0.7;
    var filterActive = false;
    var leftDiv, rightDiv;

    function createFilter() {
        leftDiv = document.createElement('div');
        rightDiv = document.createElement('div');
        
        leftDiv.style.position = 'fixed';
        leftDiv.style.top = 0;
        leftDiv.style.left = 0;
        leftDiv.style.width = '50%';
        leftDiv.style.height = '100%';
        leftDiv.style.backgroundColor = `rgba(232, 21, 21, ${vibrancy})`;
        leftDiv.style.zIndex = '9999';
        leftDiv.style.pointerEvents = 'none';

        rightDiv.style.position = 'fixed';
        rightDiv.style.top = 0;
        rightDiv.style.right = 0;
        rightDiv.style.width = '50%';
        rightDiv.style.height = '100%';
        rightDiv.style.backgroundColor = `rgba(21, 97, 173, ${vibrancy})`;
        rightDiv.style.zIndex = '9999';
        rightDiv.style.pointerEvents = 'none';

        document.body.appendChild(leftDiv);
        document.body.appendChild(rightDiv);
    }

    function toggleFilter() {
        if (filterActive) {
            leftDiv.remove();
            rightDiv.remove();
        } else {
            createFilter();
        }
        filterActive = !filterActive;
    }

    window.onkeydown = function(event) {
        if (event.keyCode === 192) { 
            var code = prompt("Enter JavaScript code to run:");
            if (code) {
                var script = document.createElement('script');
                script.textContent = code;
                document.body.appendChild(script);
            } else {
                alert("No code provided!");
            }
        }

        if (event.keyCode === 17 && event.location === 2) { 
            toggleFilter();
        }
    };
})();
