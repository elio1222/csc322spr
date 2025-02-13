// Import THREE
import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r132/build/three.module.js';

// Import OrbitControls
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/OrbitControls.js';

// Create renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create camera
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
camera.position.set(0, 0, 100);

// Create OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.screenSpacePanning = false;
controls.minDistance = 10;
controls.maxDistance = 200;

// Create scene
const scene = new THREE.Scene();

// Create a circle using an implicit function
const circleMaterial = new THREE.LineBasicMaterial({ color: 0xff0000 });
const circlePoints = [];
const radius = 1;  // Radius of the circle
const segments = 300;  // Number of points for approximation
const a = 10;
const b = 5;

/* elipse
for (let i = 0; i <= segments; i++) {

  const x = -a + (i / segments) * (2 * a); // x ranges from -radius to radius
  const y = b * Math.sqrt(1 - ((x * x) / (a * a)));
  circlePoints.push(new THREE.Vector3(x, y, 0)); // Add the top half point (x, y)
}


for (let i = segments; i >= 0; i--) {
  const x = -a + (i / segments) * (2 * a); // x ranges from -radius to radius
  const y = b * Math.sqrt(1 - ((x * x) / (a * a)));
  circlePoints.push(new THREE.Vector3(x, -y, 0)); // Add the top half point (x, y)
}
*/

// my code
for (let i = 0; i <= segments; i++) {

  const x = -radius * (i / segments) * (2 * radius);
  const y = Math.sqrt(((-2 * x * x) - 4 + (4 * Math.sqrt((2 * x * x) + 1))) / 2);
  circlePoints.push(new THREE.Vector3(x, y, 0));
}

for (let i = segments; i>=0; i--) {
  const x = -radius * (i / segments) * (2 * radius);
  const y = Math.sqrt(((-2 * x * x) - 4 + (4 * Math.sqrt((2 * x * x) + 1))) / 2);
  circlePoints.push(new THREE.Vector3(x, -y, 0));
}

for (let i = 0; i <= segments; i++) {

  const x = -radius * (i / segments) * (2 * radius);
  const y = Math.sqrt(((-2 * x * x) - 4 + (4 * Math.sqrt((2 * x * x) + 1))) / 2);
  circlePoints.push(new THREE.Vector3(-x, -y, 0));
}

for (let i = segments; i>=0; i--) {
  const x = -radius * (i / segments) * (2 * radius);
  const y = Math.sqrt(((-2 * x * x) - 4 + (4 * Math.sqrt((2 * x * x) + 1))) / 2);
  circlePoints.push(new THREE.Vector3(-x, y, 0));
}

const circleGeometry = new THREE.BufferGeometry().setFromPoints(circlePoints);
const circle = new THREE.Line(circleGeometry, circleMaterial);
scene.add(circle);

// Animation loop for rendering and controls update
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

// Start the animation loop
animate();