export function hexToHSL(hex: string) {
    // Remove the "#" character if present
    hex = hex.replace(/^#/, '');
  
    // Parse the hexadecimal color into RGB components
    const r = parseInt(hex.substring(0, 2), 16) / 255;
    const g = parseInt(hex.substring(2, 4), 16) / 255;
    const b = parseInt(hex.substring(4, 6), 16) / 255;
  
    // Find the minimum and maximum RGB components
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
  
    // Calculate the lightness (L)
    let L = (max + min) / 2;
  
    // Calculate the saturation (S)
    let S;
    if (max === min) {
      S = 0;
    } else if (L <= 0.5) {
      S = (max - min) / (max + min);
    } else {
      S = (max - min) / (2 - max - min);
    }
  
    // Calculate the hue (H)
    let H;
    if (max === min) {
      H = 0;
    } else if (max === r) {
      H = (60 * ((g - b) / (max - min)) + 360) % 360;
    } else if (max === g) {
      H = (60 * ((b - r) / (max - min)) + 120) % 360;
    } else {
      H = (60 * ((r - g) / (max - min)) + 240) % 360;
    }
  
    // Round H, S, and L to two decimal places
    H = Math.round(H * 100) / 100;
    S = Math.round(S * 100) / 100;
    L = Math.round(L * 100) / 100;

  
    // Construct and return the HSLA string
    return `${H},${S * 100}%,${L * 100}%`;
  }
  