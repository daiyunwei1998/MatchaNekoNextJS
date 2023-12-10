const fs = require('fs');
const path = require('path');

const readJsonFiles = (folderPath) => {
  const files = fs.readdirSync(folderPath);

  // Custom sorting function to ensure natural order
  const naturalSort = (a, b) => {
    const numA = parseInt(a.match(/\((\d+)\)/)[1], 10);
    const numB = parseInt(b.match(/\((\d+)\)/)[1], 10);

    return numA - numB;
  };

  // Sort files in natural order
  const sortedFiles = files.sort(naturalSort);

  const data = sortedFiles.map((file) => {
    const filePath = path.join(folderPath, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(fileContent);
  });

  return data;
};

export default readJsonFiles;
