const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');

// Function to create a placeholder image
function createPlaceholderImage(filename, text, color) {
  const width = 1200;
  const height = 675; // 16:9 aspect ratio
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Fill background
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, width, height);

  // Add text
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 48px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, width / 2, height / 2);

  // Save the image
  const buffer = canvas.toBuffer('image/jpeg');
  fs.writeFileSync(path.join(__dirname, '../public/portfolio', filename), buffer);
}

// Create portfolio directory if it doesn't exist
const portfolioDir = path.join(__dirname, '../public/portfolio');
if (!fs.existsSync(portfolioDir)) {
  fs.mkdirSync(portfolioDir, { recursive: true });
}

// Generate placeholder images
const images = [
  { filename: 'ecommerce.jpg', text: 'E-commerce Platform', color: '#4F46E5' },
  { filename: 'healthcare.jpg', text: 'Healthcare App', color: '#059669' },
  { filename: 'finance.jpg', text: 'Financial Dashboard', color: '#7C3AED' }
];

images.forEach(({ filename, text, color }) => {
  createPlaceholderImage(filename, text, color);
  console.log(`Created ${filename}`);
}); 