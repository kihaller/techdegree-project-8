function showNextOverlay(currentOverlayElement) {
  //make array of all employee overlays
  const overlayCollection = document.getElementsByClassName("overlay");
  const overlayArray = Array.from(overlayCollection);
  //get current Overlay index
  const currentOverlayIndex = overlayArray.findIndex(
    (x) => x.id === currentOverlayElement.id
  );

  //hide overlay at current index and unhides the next
  overlayArray[currentOverlayIndex].classList.add("hidden");

  if (currentOverlayIndex + 1 < overlayArray.length) {
    overlayArray[currentOverlayIndex + 1].classList.remove("hidden");
  } else {
    overlayArray[0].classList.remove("hidden");
  }
}

function showPreviousOverlay(currentOverlayElement) {
  //make array of all employee overlays
  const overlayCollection = document.getElementsByClassName("overlay");
  const overlayArray = Array.from(overlayCollection);
  //get current Overlay index
  const currentOverlayIndex = overlayArray.findIndex(
    (x) => x.id === currentOverlayElement.id
  );
  //hide overlay at current index and unhides the previous
  overlayArray[currentOverlayIndex].classList.add("hidden");

  if (currentOverlayIndex > 0) {
    overlayArray[currentOverlayIndex - 1].classList.remove("hidden");
  } else {
    overlayArray[11].classList.remove("hidden");
  }
}
