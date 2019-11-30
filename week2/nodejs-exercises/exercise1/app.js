const express = require('express');
const app = express();
const {
  createFileWithContent,
  updateFile,
  deleteFile,
  getFile,
} = require('./Module.js');

app.use(express.json());

app.post('/blogs', createFileWithContent);

app.put('/blogs', updateFile);

app.delete('/blogs/:title', deleteFile);

app.get('/blogs/:title', getFile);

app.listen(3000);
