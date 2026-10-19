// Prints cv/*.html to the PDFs the site links to, using headless Chrome.
// Usage: npm run cv   (set CHROME_PATH if Chrome isn't in the default Windows location)
import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const chrome = process.env.CHROME_PATH ?? 'C:/Program Files/Google/Chrome/Application/chrome.exe';

const cvs = [
  ['cv/cv-en.html', 'public/Maiia_Alekseeva_CV.pdf'],
  ['cv/cv-ru.html', 'public/Maiia_Alekseeva_CV_RU.pdf'],
];

for (const [source, output] of cvs) {
  execFileSync(chrome, [
    '--headless=new',
    '--disable-gpu',
    '--no-pdf-header-footer',
    // Gives the web font time to load before printing
    '--virtual-time-budget=10000',
    `--print-to-pdf=${path.join(root, output)}`,
    pathToFileURL(path.join(root, source)).href,
  ], { stdio: 'ignore' }); // Chrome logs unrelated noise; a failed print still throws

  console.log(`${source} -> ${output}`);
}
