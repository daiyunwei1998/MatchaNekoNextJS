// utils/readJsonFiles.js
const fs = require('fs');
const path = require('path');

const readJsonFiles = (folderPath) => {
  const files = fs.readdirSync(folderPath);

  const data = files.map((file) => {
    const filePath = path.join(folderPath, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(fileContent);
  });

  return data;
};


export default readJsonFiles;
