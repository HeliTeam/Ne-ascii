export function imageToAscii(imageData, targetWidth = 120) {
  return new Promise((resolve) => {
    const img = new Image();
    
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      // Calculate dimensions with aspect ratio compensation
      const aspectRatio = img.height / img.width;
      const targetHeight = Math.floor(targetWidth * aspectRatio * 0.45);
      
      canvas.width = targetWidth;
      canvas.height = targetHeight;
      
      // Draw and get pixel data
      ctx.drawImage(img, 0, 0, targetWidth, targetHeight);
      const pixels = ctx.getImageData(0, 0, targetWidth, targetHeight);
      
      // Convert to ASCII
      let asciiArt = '';
      
      for (let y = 0; y < targetHeight; y++) {
        let row = '';
        for (let x = 0; x < targetWidth; x++) {
          const index = (y * targetWidth + x) * 4;
          const r = pixels.data[index];
          const g = pixels.data[index + 1];
          const b = pixels.data[index + 2];
          
          // Calculate brightness (luminance)
          const brightness = 0.299 * r + 0.587 * g + 0.114 * b;
          
          // Map brightness to character
          if (brightness > 200) {
            row += '  '; // Light area - space
          } else if (brightness > 100) {
            row += '⠂'; // Mid brightness - single Braille
          } else {
            row += '⠂⠂'; // Dark area - double Braille
          }
        }
        asciiArt += row + '\n';
      }
      
      resolve(asciiArt);
    };
    
    img.src = imageData;
  });
}
