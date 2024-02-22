/// catc.js
javascript:(function() {
    // Function to recursively hide cursor for all elements
    function hideCursor(node) {
        var children = node.childNodes;
        for (var i in children) {
            hideCursor(children[i]);
            if (children[i].style && children[i] !== catCursor) {
                children[i].style.cursor = "none";
            }
        }
    }
    
    // Create an image element for the cat cursor
    var catCursor = document.createElement('img');
    // Set the source of the image to a cat cursor image
    catCursor.src = 'https://www.cursor.cc/cursor3d/33866.png'; // Replace 'https://example.com/cat_cursor.png' with the URL of your cat cursor image
    // Set the cursor style to none to hide the default cursor
    catCursor.style.cursor = 'none';
    // Set the position of the cat cursor to fixed so it stays in place when scrolling
    catCursor.style.position = 'fixed';
    // Set initial position of the cat cursor
    catCursor.style.top = '0';
    catCursor.style.left = '0';
    // Set the z-index high to ensure the cat cursor appears on top of other elements
    catCursor.style.zIndex = '999999';
    // Reduce the size of the cat cursor image by 75%
    catCursor.style.width = '3.5%'; // Reduce width by 75%
    catCursor.style.height = 'auto'; // Maintain aspect ratio based on the width
    // Make the image unclickable
    catCursor.style.pointerEvents = 'none';

    // Append the cat cursor image to the document body
    document.body.appendChild(catCursor);
   
    // Function to update the position of the cat cursor
    function updateCatCursorPosition(event) {
        catCursor.style.top = (event.clientY - catCursor.height / 2) + 'px';
        catCursor.style.left = (event.clientX - catCursor.width / 2) + 'px';
    }
   
    // Add event listener to update the position of the cat cursor when the mouse moves
    document.addEventListener('mousemove', updateCatCursorPosition);
    
    // Hide cursor for all elements except catCursor
    hideCursor(document.body);

    // Make the cat cursor image unclickable again
    catCursor.style.pointerEvents = 'none';
})();
