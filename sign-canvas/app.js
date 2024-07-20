const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');
let isDrawing = false;
let useEraser = false;
let penSize = 2; // Default pen size
let lastX = 0, lastY = 0, currentX = 0, currentY = 0;
const minPressure = 0.1; // Minimum pressure threshold

canvas.addEventListener('pointerdown', startDrawing);
canvas.addEventListener('pointermove', draw);
canvas.addEventListener('pointerup', stopDrawing);
canvas.addEventListener('pointerout', stopDrawing);

function startDrawing(e) {
    isDrawing = true;
    [lastX, lastY] = [e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop];
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
}

function draw(e) {
    if (!isDrawing) return;
    e.preventDefault(); // Prevent default actions
    [currentX, currentY] = [e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop];

    const pressure = e.pressure || e.force || 1; // Fallback to 1 if pressure is not available
    const effectivePressure = Math.max(pressure, minPressure); // Ensure minimum pressure

    ctx.lineCap = 'round'; // Use round pen
    ctx.strokeStyle = useEraser ? 'white' : 'black';
    ctx.lineWidth = useEraser ? 10 : (effectivePressure * penSize);
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.quadraticCurveTo(lastX, lastY, (lastX + currentX) / 2, (lastY + currentY) / 2);
    ctx.lineTo(currentX, currentY);
    ctx.stroke();

    [lastX, lastY] = [currentX, currentY];
}

function stopDrawing() {
    isDrawing = false;
    ctx.closePath();
}

document.getElementById('drawTool').addEventListener('click', () => {
    useEraser = false;
});

document.getElementById('eraserTool').addEventListener('click', () => {
    useEraser = true;
});

document.getElementById('smallPen').addEventListener('click', () => {
    penSize = 2;
    useEraser = false;
});

document.getElementById('mediumPen').addEventListener('click', () => {
    penSize = 5;
    useEraser = false;
});

document.getElementById('largePen').addEventListener('click', () => {
    penSize = 10;
    useEraser = false;
});

document.getElementById('exportPng').addEventListener('click', () => {
    const link = document.createElement('a');
    link.download = 'drawing.png';
    link.href = canvas.toDataURL();
    link.click();
});

document.getElementById('exportSvg').addEventListener('click', () => {
    const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="${canvas.width}" height="${canvas.height}">
            <foreignObject width="100%" height="100%">
                <canvas xmlns="http://www.w3.org/1999/xhtml" width="${canvas.width}" height="${canvas.height}" style="border:none"></canvas>
            </foreignObject>
        </svg>
    `;
    const blob = new Blob([svg], { type: 'image/svg+xml' });
    const link = document.createElement('a');
    link.download = 'drawing.svg';
    link.href = URL.createObjectURL(blob);
    link.click();
});
