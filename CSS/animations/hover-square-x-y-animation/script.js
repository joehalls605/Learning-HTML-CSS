console.log("Hi!");

const animationContainer = document.querySelector(".animation-container");

function updateBackgroundColor(event){
    // Get mouse position relative to the container
    const x = event.clientX / window.innerWidth * 255;
    const y = event.clientY / window.innerHeight * 255;

    // Set the background color of the container
    animationContainer.style.backgroundColor = `rgb(${x}, ${y}, 150)`;
}
animationContainer.addEventListener("mousemove", updateBackgroundColor);

/*
event.clientX and event.clientY - These are properties of the event object that are triggered during a mouse event (in this case, the mousemove event).
event.clientX: This gives the horizontal position (X-coordinate) of the mouse relative to the viewport (the visible part of the web page).
event.clientY: This gives the vertical position (Y-coordinate) of the mouse relative to the viewport.

window.innerWidth: This is the width of the browser’s viewport (the visible area of the web page).
window.innerHeight: This is the height of the browser’s viewport.

This divides the horizontal position of the mouse (event.clientX) by the total width of the viewport (window.innerWidth).
The result is a fraction (a value between 0 and 1), where 0 represents the far left of the screen and 1 represents the far right of the screen.

After calculating the fraction, we multiply it by 255 to scale the result into a value between 0 and 255, which is the valid range for color values in RGB.
*/