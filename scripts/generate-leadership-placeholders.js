const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');

// Function to create a placeholder leadership image
function createLeadershipPlaceholder(filename, name, position) {
  const width = 800;
  const height = 1000; // Portrait orientation
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Fill background with a gradient
  const gradient = ctx.createLinearGradient(0, 0, 0, height);
  gradient.addColorStop(0, '#4F46E5'); // Primary color
  gradient.addColorStop(1, '#7C3AED'); // Secondary color
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  // Add a subtle pattern
  ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
  for (let i = 0; i < width; i += 20) {
    for (let j = 0; j < height; j += 20) {
      if ((i + j) % 40 === 0) {
        ctx.fillRect(i, j, 20, 20);
      }
    }
  }

  // Add a circle for the "head" placeholder
  ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
  ctx.beginPath();
  ctx.arc(width / 2, height / 3, 150, 0, Math.PI * 2);
  ctx.fill();

  // Add name
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 36px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(name, width / 2, height / 2);

  // Add position
  ctx.font = '24px Arial';
  ctx.fillText(position, width / 2, height / 2 + 50);

  // Add "Photo Coming Soon" text
  ctx.font = '18px Arial';
  ctx.fillText('Photo Coming Soon', width / 2, height / 2 + 100);

  // Save the image
  const buffer = canvas.toBuffer('image/jpeg');
  fs.writeFileSync(path.join(__dirname, '../public/images/team/leadership', filename), buffer);
}

// Create leadership directory if it doesn't exist
const leadershipDir = path.join(__dirname, '../public/images/team/leadership');
if (!fs.existsSync(leadershipDir)) {
  fs.mkdirSync(leadershipDir, { recursive: true });
}

// Generate placeholder images for leadership positions
const leadership = [
  { filename: 'ceo-john-doe.jpg', name: 'John Doe', position: 'CEO / Founder' },
  { filename: 'cto-jane-smith.jpg', name: 'Jane Smith', position: 'CTO / Technical Lead' },
  { filename: 'coo-michael-johnson.jpg', name: 'Michael Johnson', position: 'COO / Operations Lead' },
  { filename: 'head-of-design-sarah-williams.jpg', name: 'Sarah Williams', position: 'Head of Design' },
  { filename: 'head-of-development-robert-brown.jpg', name: 'Robert Brown', position: 'Head of Development' },
  { filename: 'head-of-marketing-emily-davis.jpg', name: 'Emily Davis', position: 'Head of Marketing' }
];

leadership.forEach(({ filename, name, position }) => {
  createLeadershipPlaceholder(filename, name, position);
  console.log(`Created ${filename}`);
}); 