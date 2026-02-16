import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const generateIconType = () => {
    const publicDirectory = path.resolve(__dirname, "../public");
    const outputDirectory = path.resolve(__dirname, "../types");
    const outputFile = path.join(outputDirectory, "svgIcons.ts");

    if (!fs.existsSync(publicDirectory)) {
        console.error(`Error: Public directory not found at ${publicDirectory}`);
        return;
    }

    if (!fs.existsSync(outputDirectory)) {
        fs.mkdirSync(outputDirectory, { recursive: true });
    }

    const files = fs.readdirSync(publicDirectory);
    const svgFiles = files
        .filter((file) => file.endsWith(".svg"))
        .map((file) => file.replace(".svg", ""));

    if (svgFiles.length === 0) {
        console.warn("Warning: No SVG files found in public directory.");
        return;
    }

    const typeContent = `export type SvgIcon = \n    | "${svgFiles.join('"\n    | "')}";\n`;

    fs.writeFileSync(outputFile, typeContent);
    console.log(`Successfully generated ${outputFile} with ${svgFiles.length} icons.`);
};

generateIconType();