const fs = require('fs');

function createFileWithContent(req, res) {
  // How to get the title and content from the request??
  const { title, content } = req.body;

  if (title && content) {
    fs.writeFileSync(title, content);
    res.send('OK');
  } else {
    res.statusCode = 400;
    res.send(`Invalid entry / Bad request: ${res.statusCode}`);
  }
}

function updateFile(req, res) {
  // How to get the title and content from the request??
  const { title, content } = req.body;
  if (fs.existsSync(title)) {
    fs.writeFileSync(title, JSON.stringify({ content }));
    res.send('OK');
  } else respondNotFound(res);
}

function deleteFile(req, res) {
  // How to get the title from the url parameters?
  const title = req.params.title;
  if (fs.existsSync(title)) {
    fs.unlinkSync(title);
    res.send('File is deleted');
  } else respondNotFound(res);
}

function getFile(req, res) {
  const title = req.params.title;
  if (fs.existsSync(title)) res.sendfile(title);
  else respondNotFound(res);
}

function respondNotFound(res) {
  res.statusCode = 404;
  res.send(`File is not found: ${res.statusCode}`);
}

module.exports = { createFileWithContent, updateFile, deleteFile, getFile };
