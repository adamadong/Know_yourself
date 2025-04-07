import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { getResults } from '../models/ratingModel.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

/**
 * Serve a core page
 */
export function serveCorePage(req, res, pageNumber) {
    res.sendFile(path.join(rootDir, 'static', `core${pageNumber}.html`));
}

/**
 * Serve the results page with data embedded
 */
export function serveResultPage(req, res) {
    const sumGroups = getResults();
    const datatransfer = { sumGroups };

    const htmlFilePath = path.join(rootDir, 'static', 'resultat.html');
    const htmlContent = fs.readFileSync(htmlFilePath, 'utf8');
    const modifiedHtmlContent = htmlContent.replace(
        '<script id="dynamicData"></script>',
        `<script id="dynamicData">const dynamicData = ${JSON.stringify(datatransfer)};</script>`
    );

    res.send(modifiedHtmlContent);
}
