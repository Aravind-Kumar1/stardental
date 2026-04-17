import fs from 'fs';

const buffer = fs.readFileSync('public/hero_sec.png');

// Find IHDR chunk to determine if it has alpha
// PNG format: 8 byte signature, then chunks (length, type, data, crc)
let offset = 8;
let width = 0;
let height = 0;
let colorType = 0;

while (offset < buffer.length) {
    const length = buffer.readUInt32BE(offset);
    const type = buffer.toString('ascii', offset + 4, offset + 8);
    
    if (type === 'IHDR') {
        width = buffer.readUInt32BE(offset + 8);
        height = buffer.readUInt32BE(offset + 12);
        colorType = buffer.readUInt8(offset + 17);
        break;
    }
    offset += length + 12;
}

console.log(`Image: ${width}x${height}, ColorType: ${colorType}`);
// We could try to read raw pixels but zlib decompression is needed for IDAT chunks.
