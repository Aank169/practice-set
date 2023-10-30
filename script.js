const headings = ["Heading 1", "Heading 2", "Heading 3"];

let currentIndex = 0;

function typeHeading() {
  if (currentIndex < headings.length) {
    const currentHeading = headings[currentIndex];
    const headingElement = document.getElementById(`heading${currentIndex + 1}`);
    let charIndex = 0;

    function typeChar() {
      if (charIndex < currentHeading.length) {
        headingElement.textContent += currentHeading.charAt(charIndex);
        charIndex++;
        setTimeout(typeChar, 100); // Adjust the typing speed (delay) as needed
      } else {
        currentIndex++;
        setTimeout(typeHeading, 1000); // Delay before the next heading
      }
    }

    typeChar();
  }
}

typeHeading();
