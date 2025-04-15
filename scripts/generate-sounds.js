const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const soundsDir = path.join(__dirname, '../public/sounds');
if (!fs.existsSync(soundsDir)) {
  fs.mkdirSync(soundsDir, { recursive: true });
}

// Generate beep sounds with different frequencies
const frequencies = {
  '1': 261.63,  // 도 (C4)
  '2': 293.66,  // 레 (D4)
  '3': 329.63,  // 미 (E4)
  '4': 349.23,  // 파 (F4)
  '5': 392.00,  // 솔 (G4)
  '6': 440.00,  // 라 (A4)
  '7': 493.88,  // 시 (B4)
  '8': 523.25,  // 도 (C5)
  '9': 587.33,  // 레 (D5)
  'star': 659.25,  // 미 (E5)
  '0': 698.46,     // 파 (F5)
  'hash': 783.99   // 솔 (G5)
};


Object.entries(frequencies).forEach(([key, freq]) => {
  const outputFile = path.join(soundsDir, `${key}.mp3`);
  // duration를 0.2초로 설정한 예시입니다.
  const command = `ffmpeg -f lavfi -i "sine=frequency=${freq}:duration=0.2" -acodec libmp3lame ${outputFile}`;
  
  try {
    execSync(command);
    console.log(`Generated sound for ${key} at ${freq}Hz`);
  } catch (error) {
    console.error(`Error generating sound for ${key}:`, error);
  }
});
