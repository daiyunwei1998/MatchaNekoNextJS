import Gallery from '../components/Gallery'
const fs = require('fs');
const path = require('path');

function listFilesRecursively(directoryPath) {
  const fileList = [];

  function traverseDirectory(currentPath, parentFolder) {
    const items = fs.readdirSync(currentPath);

    for (const item of items) {
      const itemPath = path.join(currentPath, item);
      const relativePath = path.relative(directoryPath, itemPath); // Calculate the relative path
      const itemStat = fs.statSync(itemPath);

      if (itemStat.isDirectory()) {
        // If it's a directory, recursively traverse it
        traverseDirectory(itemPath, path.join(parentFolder, item));
      } else if (itemStat.isFile()) {
        // If it's a file, add it to the list with parent folder information
        let label = '';
        const matches = item.match(/\((.*?)\)/); // Check for content inside parentheses

        if (matches && matches.length > 1) {
          label = matches[1]; // Extract content inside parentheses
        }

        fileList.push({
          parentFolder,
          filename: item,
          label,
          path: path.join('./images/gposes',relativePath),
        });
      }
    }
  }

  traverseDirectory(directoryPath, '');

  return fileList;
}

// Usage:
const directoryPath = './public/images/gposes'; // Change this to your directory path



export default function Page() {
  const filesList = listFilesRecursively(directoryPath);

  return (
      <Gallery data={filesList}></Gallery>
  );
}




