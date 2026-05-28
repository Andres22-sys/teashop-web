import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const SRC_DIR = path.resolve(process.cwd(), 'src', 'assets', 'images');
const OUT_DIR = path.resolve(SRC_DIR, 'optimized');
const SIZES = [1600, 800, 400];
const FORMATS = ['webp', 'avif', 'jpeg'];

async function ensureOut() {
    try {
        await fs.mkdir(OUT_DIR, { recursive: true });
    } catch (err) {
        console.error('Failed to create output dir', err);
        process.exit(1);
    }
}

function isImageFile(name) {
    return /\.(jpe?g|png)$/i.test(name);
}

async function processFile(file) {
    const inputPath = path.join(SRC_DIR, file);
    const name = path.parse(file).name;
    const img = sharp(inputPath);

    const metadata = await img.metadata();
    const origWidth = metadata.width || SIZES[0];

    const tasks = [];

    for (const size of SIZES) {
        if (size > origWidth) continue; // skip upscaling
        for (const fmt of FORMATS) {
            const outName = `${name}-${size}.${fmt === 'jpeg' ? 'jpg' : fmt}`;
            const outPath = path.join(OUT_DIR, outName);
            let pipeline = sharp(inputPath).resize({ width: size });
            if (fmt === 'webp') pipeline = pipeline.webp({ quality: 82 });
            if (fmt === 'avif') pipeline = pipeline.avif({ quality: 50 });
            if (fmt === 'jpeg') pipeline = pipeline.jpeg({ quality: 82 });
            tasks.push(pipeline.toFile(outPath).then(() => console.log('written', outName)));
        }
    }

    // Also create optimized original-size JPEG if not PNG
    if (!/\.png$/i.test(file)) {
        const outName = `${name}-orig.jpg`;
        const outPath = path.join(OUT_DIR, outName);
        const t = sharp(inputPath).jpeg({ quality: 82 }).toFile(outPath).then(() => console.log('written', outName));
        tasks.push(t);
    }

    await Promise.all(tasks);
}

async function main() {
    await ensureOut();
    const files = await fs.readdir(SRC_DIR);
    const images = files.filter(isImageFile);
    if (images.length === 0) {
        console.log('No images found in', SRC_DIR);
        return;
    }
    for (const f of images) {
        try {
            await processFile(f);
        } catch (err) {
            console.error('Error processing', f, err);
        }
    }
    console.log('Done optimizing images. Output in', OUT_DIR);
}

main().catch(err => {
    console.error(err);
    process.exit(1);
});
