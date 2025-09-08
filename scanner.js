import fs from "fs";
import scanDirectory from "node-recursive-directory";

export async function readDirectoryContents(dirPath) {
  try {
    const files = await scanDirectory(dirPath);
    const sizes = {};
    const languages = fs.readFileSync("languages.txt", "utf-8").split("\r\n");
    for (const file of files) {
      const stats = fs.statSync(file);
      const fileType = file.split('.').pop();
      if (!languages.includes(fileType)) continue; // Skip file types not in the languages list
      if (sizes[fileType]) {
        sizes[fileType] += stats.size / (1024 ** 2); // Accumulate size for the same file type in megabytes
      } else {
        sizes[fileType] = stats.size / (1024 ** 2); // Initialize size for new file type in megabytes
      }
    }
    const sizeTotal = Object.values(sizes).reduce((a, b) => a + b, 0);
    for (const fileType in sizes) {
      sizes[fileType] = '~' + ((sizes[fileType] / sizeTotal) * 100).toFixed(3) + '%'; // Convert to percentage
    }
    console.log(sizes);
  } catch (error) {
    console.error("Error scanning directory:", error);
  }
}
