drawHead(imageData: ImageData, centerX: number, centerY: number) {
  this.drawShadow(imageData, centerX, centerY - 120, 60, 20); // Head shadow
  this.drawEllipse(imageData, centerX, centerY - 120, 50, 60, [255, 204, 153, 255]);
  this.drawEars(imageData, centerX, centerY - 120);
}

drawEars(imageData: ImageData, centerX: number, centerY: number) {
  // Adjusted ear positions to be closer to the head
  this.drawEllipse(imageData, centerX - 50, centerY - 120, 10, 20, [255, 204, 153, 255]);
  this.drawEllipse(imageData, centerX + 50, centerY - 120, 10, 20, [255, 204, 153, 255]);
}

drawMouth(imageData: ImageData, centerX: number, centerY: number) {
  // Lowered the mouth position for a more natural look
  this.drawEllipse(imageData, centerX, centerY - 90, 15, 8, [255, 0, 0, 255]);
}

drawNose(imageData: ImageData, centerX: number, centerY: number) {
  // Adjusted the nose color for better distinction
  this.drawEllipse(imageData, centerX, centerY - 115, 5, 8, [255, 160, 122, 255]);
}
