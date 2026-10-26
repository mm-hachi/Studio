import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';

const assets = fileURLToPath(new URL('./assets/', import.meta.url));
const positions = [];
const normals = [];

function box(name, center, size, material) {
  const [cx, cy, cz] = center;
  const [sx, sy, sz] = size.map(value => value / 2);
  const faces = [
    { n: [1, 0, 0], v: [[sx,-sy,-sz],[sx,sy,-sz],[sx,sy,sz],[sx,-sy,sz]] },
    { n: [-1, 0, 0], v: [[-sx,-sy,sz],[-sx,sy,sz],[-sx,sy,-sz],[-sx,-sy,-sz]] },
    { n: [0, 1, 0], v: [[-sx,sy,-sz],[-sx,sy,sz],[sx,sy,sz],[sx,sy,-sz]] },
    { n: [0, -1, 0], v: [[-sx,-sy,sz],[-sx,-sy,-sz],[sx,-sy,-sz],[sx,-sy,sz]] },
    { n: [0, 0, 1], v: [[sx,-sy,sz],[sx,sy,sz],[-sx,sy,sz],[-sx,-sy,sz]] },
    { n: [0, 0, -1], v: [[-sx,-sy,-sz],[-sx,sy,-sz],[sx,sy,-sz],[sx,-sy,-sz]] }
  ];
  const vertices = [];
  const faceNormals = [];
  for (const face of faces) {
    for (const index of [0, 1, 2, 0, 2, 3]) {
      const vertex = face.v[index];
      vertices.push(vertex[0] + cx, vertex[1] + cy, vertex[2] + cz);
      faceNormals.push(...face.n);
    }
  }
  positions.push({ name, material, values: vertices });
  normals.push(faceNormals);
}

function makeFurniture(kind) {
  positions.length = 0;
  normals.length = 0;
  if (kind === 'sofa') {
    box('upholstery', [0, 0.5, 0], [2.35, 0.55, 0.94], 0);
    box('upholstery', [0, 1.05, -0.38], [2.35, 0.78, 0.24], 0);
    box('upholstery', [-0.98, 0.79, 0], [0.35, 0.65, 1], 0);
    box('upholstery', [0.98, 0.79, 0], [0.35, 0.65, 1], 0);
    box('upholstery', [-0.38, 0.82, 0.02], [0.62, 0.18, 0.72], 0);
    box('upholstery', [0.38, 0.82, 0.02], [0.62, 0.18, 0.72], 0);
    for (const x of [-0.92, 0.92]) for (const z of [-0.32, 0.32]) {
      box('frame', [x, 0.17, z], [0.09, 0.34, 0.09], 1);
    }
  } else if (kind === 'chair') {
    box('upholstery', [0, 0.72, 0.02], [1.12, 0.22, 0.9], 0);
    box('upholstery', [0, 1.25, -0.32], [1.12, 0.96, 0.18], 0);
    for (const x of [-0.49, 0.49]) {
      box('frame', [x, 0.38, 0.24], [0.08, 0.68, 0.08], 1);
      box('frame', [x, 0.76, -0.36], [0.08, 1.3, 0.08], 1);
      box('frame', [x, 0.83, 0.03], [0.08, 0.08, 0.78], 1);
    }
    box('frame', [0, 0.4, -0.37], [1, 0.08, 0.08], 1);
  } else {
    box('tint', [0, 0.82, 0], [1.65, 0.18, 0.95], 0);
    for (const x of [-0.68, 0.68]) for (const z of [-0.34, 0.34]) {
      box('frame', [x, 0.4, z], [0.09, 0.72, 0.09], 1);
    }
  }
}

function glb() {
  const binaryParts = [];
  const views = [];
  const accessors = [];
  let byteOffset = 0;
  let json;
  const padBinary = () => {
    while (byteOffset % 4) {
      binaryParts.push(Buffer.from([0]));
      byteOffset++;
    }
  };
  const addAccessor = (values, componentType, type, target, minMax = false) => {
    padBinary();
    const data = Buffer.alloc(values.length * 4);
    values.forEach((value, index) => data.writeFloatLE(value, index * 4));
    const bufferView = views.length;
    views.push({ buffer: 0, byteOffset, byteLength: data.length, target });
    binaryParts.push(data);
    byteOffset += data.length;
    const accessor = {
      bufferView,
      componentType,
      count: type === 'VEC3' ? values.length / 3 : values.length,
      type
    };
    if (minMax) {
      const xs = values.filter((_, index) => index % 3 === 0);
      const ys = values.filter((_, index) => index % 3 === 1);
      const zs = values.filter((_, index) => index % 3 === 2);
      accessor.min = [Math.min(...xs), Math.min(...ys), Math.min(...zs)];
      accessor.max = [Math.max(...xs), Math.max(...ys), Math.max(...zs)];
    }
    accessors.push(accessor);
    return accessors.length - 1;
  };
  const meshes = positions.map((part, index) => ({
    name: part.name,
    primitives: [{
      attributes: {
        POSITION: addAccessor(part.values, 5126, 'VEC3', 34962, true),
        NORMAL: addAccessor(normals[index], 5126, 'VEC3', 34962)
      },
      material: part.material,
      mode: 4
    }]
  }));
  const binary = Buffer.concat(binaryParts);
  json = {
    asset: { version: '2.0', generator: 'Stillroom integration demo' },
    scene: 0,
    scenes: [{ nodes: meshes.map((_, index) => index) }],
    nodes: meshes.map((_, index) => ({ mesh: index, name: positions[index].name })),
    meshes,
    materials: [
      { name: 'tint', pbrMetallicRoughness: { baseColorFactor: [0.82, 0.77, 0.69, 1], metallicFactor: 0, roughnessFactor: 0.86 } },
      { name: 'frame', pbrMetallicRoughness: { baseColorFactor: [0.46, 0.32, 0.2, 1], metallicFactor: 0, roughnessFactor: 0.68 } }
    ],
    accessors,
    bufferViews: views,
    buffers: [{ byteLength: binary.length }]
  };
  const jsonBuffer = Buffer.from(JSON.stringify(json));
  const paddedJsonLength = Math.ceil(jsonBuffer.length / 4) * 4;
  const paddedBinaryLength = Math.ceil(binary.length / 4) * 4;
  const header = Buffer.alloc(12);
  header.writeUInt32LE(0x46546c67, 0);
  header.writeUInt32LE(2, 4);
  header.writeUInt32LE(12 + 8 + paddedJsonLength + 8 + paddedBinaryLength, 8);
  const jsonChunkHeader = Buffer.alloc(8);
  jsonChunkHeader.writeUInt32LE(paddedJsonLength, 0);
  jsonChunkHeader.writeUInt32LE(0x4e4f534a, 4);
  const jsonChunk = Buffer.alloc(paddedJsonLength, 0x20);
  jsonBuffer.copy(jsonChunk);
  const binaryChunkHeader = Buffer.alloc(8);
  binaryChunkHeader.writeUInt32LE(paddedBinaryLength, 0);
  binaryChunkHeader.writeUInt32LE(0x004e4942, 4);
  const binaryChunk = Buffer.alloc(paddedBinaryLength);
  binary.copy(binaryChunk);
  return Buffer.concat([header, jsonChunkHeader, jsonChunk, binaryChunkHeader, binaryChunk]);
}

async function main() {
  await mkdir(assets, { recursive: true });
  for (const kind of ['sofa', 'chair', 'table']) {
    makeFurniture(kind);
    const file = resolve(assets, `sample-${kind}.glb`);
    await writeFile(file, glb());
    console.log(`Created ${file}`);
  }
}

main().catch(error => {
  console.error('Could not generate demo models:', error);
  process.exitCode = 1;
});
