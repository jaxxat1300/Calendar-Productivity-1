// Copies dist/index.html to dist/404.html so GitHub Pages serves SPA routes
const fs = require('fs')
const path = require('path')

const dist = path.resolve(__dirname, '..', 'dist')
const indexPath = path.join(dist, 'index.html')
const notFoundPath = path.join(dist, '404.html')

if (fs.existsSync(indexPath)) {
  fs.copyFileSync(indexPath, notFoundPath)
  console.log('Created dist/404.html for SPA routing')
} else {
  console.warn('index.html not found in dist; skipping 404.html creation')
}


