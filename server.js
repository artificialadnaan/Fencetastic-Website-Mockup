const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
  const page = req.path === '/' ? 'index' : req.path.replace(/^\//, '').replace(/\/$/, '');
  const filePath = path.join(__dirname, 'public', `${page}.html`);
  res.sendFile(filePath, (err) => {
    if (err) {
      res.status(404).sendFile(path.join(__dirname, 'public', 'index.html'));
    }
  });
});

app.listen(PORT, () => {
  console.log(`Fencetastic server running on port ${PORT}`);
});
