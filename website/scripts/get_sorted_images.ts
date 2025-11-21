import fs from 'fs';
import path from 'path';

const DIRECTORY = path.join(process.cwd(), 'website/public/My story');
const COMPONENT_PATH = path.join(process.cwd(), 'website/components/MyStory.tsx');

interface ImageConfig {
    src: string;
    span: string;
}

const DEFAULT_SPAN = 'md:col-span-1 md:row-span-1';

async function main() {
    try {
        // 1. Read existing config to preserve spans
        let existingSpans: Record<string, string> = {};
        if (fs.existsSync(COMPONENT_PATH)) {
            const content = fs.readFileSync(COMPONENT_PATH, 'utf-8');
            const match = content.match(/const IMAGE_CONFIG = (\[[\s\S]*?\]);/);
            if (match && match[1]) {
                try {
                    // eval is dangerous but this is a local script for a known file structure
                    // A safer way is to regex parse, but let's try a simple regex extract loop
                    const lines = match[1].split('\n');
                    lines.forEach(line => {
                        const srcMatch = line.match(/src:\s*'([^']+)'/);
                        const spanMatch = line.match(/span:\s*'([^']+)'/);
                        if (srcMatch && spanMatch) {
                            existingSpans[srcMatch[1]] = spanMatch[1];
                        }
                    });
                } catch (e) {
                    console.error('Failed to parse existing config:', e);
                }
            }
        }

        // 2. Get files and sort
        const files = fs.readdirSync(DIRECTORY);

        // Filter for images and get stats
        const imageFiles = files.filter(file => {
            const ext = path.extname(file).toLowerCase();
            return ['.jpg', '.jpeg', '.png', '.webp'].includes(ext) && !file.includes('copy');
        }).map(file => {
            const filePath = path.join(DIRECTORY, file);
            const stats = fs.statSync(filePath);
            return {
                file,
                birthtime: stats.birthtime
            };
        });

        // Sort by birthtime descending (Newest to Oldest)
        imageFiles.sort((a, b) => b.birthtime.getTime() - a.birthtime.getTime());

        // 3. Generate config with preserved spans
        const config: ImageConfig[] = imageFiles.map(img => ({
            src: img.file,
            span: existingSpans[img.file] || DEFAULT_SPAN
        }));

        console.log(JSON.stringify(config, null, 4));
        console.error(`Processed ${config.length} images.`);

    } catch (error) {
        console.error('Error:', error);
    }
}

main();
