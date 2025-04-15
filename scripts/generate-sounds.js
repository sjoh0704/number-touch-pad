const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const soundsDir = path.join(__dirname, '../public/sounds');
if (!fs.existsSync(soundsDir)) {
  fs.mkdirSync(soundsDir, { recursive: true });
}

// Generate beep sounds with different frequencies
const frequencies = {
  '0': 440,  // A4
  '1': 493.88,  // B4
  '2': 523.25,  // C5
  '3': 587.33,  // D5
  '4': 659.25,  // E5
  '5': 698.46,  // F5
  '6': 783.99,  // G5
  '7': 880.00,  // A5
  '8': 987.77,  // B5
  '9': 1046.50, // C6
  '*': 1174.66, // D6
  '#': 1318.51  // E6
};

Object.entries(frequencies).forEach(([key, freq]) => {
  const outputFile = path.join(soundsDir, `${key}.mp3`);
  const command = `ffmpeg -f lavfi -i "sine=frequency=${freq}:duration=0.1" -acodec libmp3lame ${outputFile}`;
  
  try {
    execSync(command);
    console.log(`Generated sound for ${key} at ${freq}Hz`);
  } catch (error) {
    console.error(`Error generating sound for ${key}:`, error);
  }
}); 